DOCKER_COMPOSE = docker-compose exec users

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


