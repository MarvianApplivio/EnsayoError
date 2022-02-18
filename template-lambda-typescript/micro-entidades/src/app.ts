<<<<<<< HEAD
import express from 'express';
import { routerApi } from './config/router/router';

const serverless = require('serverless-http');
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`Lamda applivio application is running on port ${port}.`);
});

=======
import express from 'express';
import { routerApi } from './config/router/router';

const serverless = require('serverless-http');
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`Lamda applivio application is running on port ${port}.`);
});

>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
module.exports.handler = serverless(app);