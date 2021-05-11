# Readme
Docker exmaple app to experiment with containers orchestration via Docker Compose


## Goals / requirements:
- [done] create 2 containers that can talk to eachother (i.e. application + database)  
- [done] use a Docker Compose YAML file to orchestrate everything
- [done] application needs to be reachable outside of container (e.g. to a URL)
- [done] demonstrate that the application & the database are connected, via an API call that returns something from the database


## Docker commands:  
1. DEV: docker-compose --env-file ./.env-dev up  
2. PROD: docker-compose --env-file ./.env-prod up  


## Tests:  
1. Dev test:  
Accessing http://localhost:7999/ping returns 'pong' showing app connection  
Accessing http://localhost:7999/data returns JSON object from database  

2. Prod test:  
Accessing http://localhost:8111/ping returns 'pong' showing app connection  
Accessing http://localhost:8111/data returns JSON object from database  


## Future tasks / wishlist:  
- [done] dev & prod Composer files, via .ENV file variables:  
- dev .ENV: Composer needs local file access to update code files on the fly  
- prod .ENV: Composer needs to be mounted with it's own file state (independent of local)  
- demonstrate understanding of updating a container into Prod (via Compose)  
- container clusters (Docker Swarm / Kubernetes)  
- Docker Swarm / Kubernetes: auto-scaling  
- 