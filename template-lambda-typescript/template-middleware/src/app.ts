import express from 'express';
import { routerApi } from './config/router/router';

const serverless = require('serverless-http');
const app = express();
const port = 3000;

routerApi(app);

app.listen(port, () => {
  console.log(`Lamda applivio application is running on port ${port}.`);
});

module.exports.handler = serverless(app);