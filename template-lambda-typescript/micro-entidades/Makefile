<<<<<<< HEAD
DOCKER_COMPOSE = docker-compose exec entidad

.PHONY: sh install run-local deploy-staging deploy-production

sh:
	${DOCKER_COMPOSE} /bin/sh

install:
	${DOCKER_COMPOSE} npm install


run-local:
	${DOCKER_COMPOSE} sls --stage development offline start --host 0.0.0.0

deploy-staging:
	${DOCKER_COMPOSE} sls --stage staging deploy

deploy-production:
	${DOCKER_COMPOSE} sls --stage production deploy


=======
DOCKER_COMPOSE = docker-compose exec entidad

.PHONY: sh install run-local deploy-staging deploy-production

sh:
	${DOCKER_COMPOSE} /bin/sh

install:
	${DOCKER_COMPOSE} npm install


run-local:
	${DOCKER_COMPOSE} sls --stage development offline start --host 0.0.0.0

deploy-staging:
	${DOCKER_COMPOSE} sls --stage staging deploy

deploy-production:
	${DOCKER_COMPOSE} sls --stage production deploy


>>>>>>> 7303bd64fc92e33b57e1ec0f76edddd5e3138ad5
