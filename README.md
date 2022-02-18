# Template for Lambda Projects

This project is intended to be used as skeleton when starts to develop lambdas on typescript and express


## Features

* Support for Typescript
* Express Framework
* Serverless Framework
* Test locally


## Local development

To run this project locally run following command:

* `docker build -t applivio-nodejs:14.18.3-alpine3.15 -f Dockerfile .`
* `docker-compose up -d`
* Go to each project(template-micros and template-middleware) and run `make install` and `make run-local`

Another option to run after been executed `make install` is uncomment `command` section in `docker-compose` file and then run `docker-compose up -d`

