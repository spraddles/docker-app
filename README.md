# docker-app
Docker exmaple app to experiment with containers






Docker commands:

RUN:
docker build -t php-api-dev . -f ./docker-files/Dockerfile.dev

BUILD:
Postgres: docker run -p 5432:5432 -it -e POSTGRES_DB=postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres --network="php-api-network" postgres:12.6
PHP container: docker run -it -p 8000:8000 -v $PWD:/php-api-run --network="php-api-network" php-api-dev




Goals / requirements:
- create 2 containers that can talk to eachother (i.e. application + database)  
- use a Docker Compose YAML file to orchestrate everything
- application needs to be reachable outside of container (e.g. to a URL)
- demonstrate that the application & the database are connected, via an API call that returns something from the databasae



Future tasks / wishlist:  
- dev & prod Composer files, via .ENV file variables
- Composer (dev) needs local file access to update code files on the fly
- Composer (prod) needs to be mounted with it's own file state
- container clusters (Docker Swarm / Kubernetes)  
- Docker Swarm / Kubernetes: auto-scaling  
- 
