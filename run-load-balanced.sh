#!/bin/bash

set -e

docker-compose -f ./nginx/docker-compose.yml rm -f
docker-compose -f ./nginx/docker-compose.yml kill
docker-compose -f ./nginx/docker-compose.yml build
docker-compose -f ./nginx/docker-compose.yml up nginx
docker-compose -f ./nginx/docker-compose.yml rm -f
docker-compose -f ./nginx/docker-compose.yml kill
