#!/bin/bash

set -e

docker-compose -f ./acceptance/docker-compose.yml rm -f
docker-compose -f ./acceptance/docker-compose.yml kill
docker-compose -f ./acceptance/docker-compose.yml build
docker-compose -f ./acceptance/docker-compose.yml run acceptance
docker-compose -f ./acceptance/docker-compose.yml rm -f
docker-compose -f ./acceptance/docker-compose.yml kill
