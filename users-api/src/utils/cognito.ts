import { AdminCreateUserCommand, AdminInitiateAuthCommand, AdminInitiateAuthCommandInput, CognitoIdentityProviderClient, RespondToAuthChallengeCommand, RespondToAuthChallengeCommandInput } from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";
import { env } from "process";

export class CognitoUtils {

    public static async createUser(username: string): Promise<boolean> {
        const input = {
            UserPoolId: env.COGNITO_USER_POOL_ID,
            Username: username //email
        }

        const client = new CognitoIdentityProviderClient({ region: env.AWS_REGION});
        const command = new AdminCreateUserCommand(input);
        const response = await client.send(command);
        console.log(response);
        return true
    }

    public static async getTokens(username: string, password: string): Promise<{}> {

        const SECRET_KEY_COGNITO: string = env.COGNITO_SECRET_KEY;
        const CLIENT_ID: string = env.COGNITO_CLIENT_ID;
        const secretHash = CognitoUtils.generateSecretHash(SECRET_KEY_COGNITO, username, CLIENT_ID);
        const input: AdminInitiateAuthCommandInput = {
            AuthFlow: "ADMIN_NO_SRP_AUTH",
            UserPoolId: env.COGNITO_USER_POOL_ID,
            ClientId: CLIENT_ID,
            AuthParameters: {
                USERNAME: username, //email
                PASSWORD: password,
                SECRET_HASH: secretHash
            }    
        }
        
        const client = new CognitoIdentityProviderClient({ region: env.AWS_REGION});
        const command = new AdminInitiateAuthCommand(input);

        try {
            const response = await client.send(command);
            if (response.ChallengeName != undefined && response.ChallengeName === "NEW_PASSWORD_REQUIRED") {
                return {message: "Primer login, cambia tu contrasena", session: response.Session};
            }

            if (response.$metadata.httpStatusCode == 200 && response.ChallengeName == undefined) {
                return response.AuthenticationResult
            }
            return {result: true};
        } catch (error) {
            console.log("Ocurrio un error", error)
            return {result: false}
        }

    }

    public static async challengeFirstLogin(username: string, newPassword: string, session: string): Promise<{}> {
        const SECRET_KEY_COGNITO: string = env.COGNITO_SECRET_KEY;
        const CLIENT_ID: string = env.COGNITO_CLIENT_ID;
        const secretHash = CognitoUtils.generateSecretHash(SECRET_KEY_COGNITO, username, CLIENT_ID);
        const input: RespondToAuthChallengeCommandInput = {
            ChallengeName: "NEW_PASSWORD_REQUIRED",
            ClientId: CLIENT_ID,
            Session: session,
            
            ChallengeResponses: {
                USERNAME: username, //email
                NEW_PASSWORD: newPassword,
                SECRET_HASH: secretHash,
                "userAttributes.name": "jesus" //TODO
            }

        }
        const client = new CognitoIdentityProviderClient({ region: "us-east-1"});
        const command = new RespondToAuthChallengeCommand(input);
        try {
            const response = await client.send(command);
            if (response.$metadata.httpStatusCode == 200) {
                return response.AuthenticationResult;
            }
            return {result: true};
        } catch (error) {
            console.log("OCURRIO UN ERROR", error);
            return {result: false}
        }
    }


    private static generateSecretHash(secret: string, data: string, clientId): string {
        return createHmac('sha256', secret).update(data+clientId).digest("base64");
    }
}