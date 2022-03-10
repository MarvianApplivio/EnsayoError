import { AdminInitiateAuthCommand, AdminInitiateAuthCommandInput, AuthenticationResultType, CognitoIdentityProviderClient} from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";
import { env } from "process";
import * as jose from 'jose'


export class CognitoUtils {

        /**
     * 
     * @param username 
     * @param password 
     * @returns Promise<{}>
     */
    public static async getTokens(username: string, password: string): Promise<AuthenticationResultType | boolean | {message: string, session: string}> {

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
                return {message: "First login, change your password", session: response.Session};
            }

            if (response.$metadata.httpStatusCode == 200 && response.ChallengeName == undefined) {
                return response.AuthenticationResult
            }
            console.log("Get token unhandle condition: ", response);
            return false;
        } catch (error) {
            console.log("Ocurrio un error", error)
            return false
        }

    }


    /**
     * 
     * @param secret 
     * @param data 
     * @param clientId 
     * @returns string
     */
    private static generateSecretHash(secret: string, data: string, clientId: string): string {
        console.log(secret);
        console.log(data);
        console.log(clientId);
        return createHmac('sha256', secret).update(data+clientId).digest("base64");
    }

    

    /**
     * 
     * @param refreshToken 
     * @param oldIdToken 
     * @returns Promise<{}>
     */
     public static async refreshTokens(refreshToken: string, oldIdToken: string): Promise<AuthenticationResultType | boolean> {

        const SECRET_KEY_COGNITO: string = env.COGNITO_SECRET_KEY;
        const CLIENT_ID: string = env.COGNITO_CLIENT_ID;
        const claims = jose.decodeJwt(oldIdToken) as {};
        const secretHash = CognitoUtils.generateSecretHash(SECRET_KEY_COGNITO, claims["cognito:username"], CLIENT_ID);
        const input: AdminInitiateAuthCommandInput = {
            AuthFlow: "REFRESH_TOKEN_AUTH",
            UserPoolId: env.COGNITO_USER_POOL_ID,
            ClientId: CLIENT_ID,
            AuthParameters: {
                REFRESH_TOKEN: refreshToken,
                SECRET_HASH: secretHash
            }    
        }
        
        const client = new CognitoIdentityProviderClient({ region: env.AWS_REGION});
        const command = new AdminInitiateAuthCommand(input);

        try {
            const response = await client.send(command);
            
            if (response.$metadata.httpStatusCode != 200 && response.ChallengeName != undefined) {
                return false;
            }
            return response.AuthenticationResult;
            
        } catch (error) {
            console.log(error);
            return false;
        }

    }

}