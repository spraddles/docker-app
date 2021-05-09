# Readme
Docker exmaple app to experiment with containers orchestration via Docker Compose


## Goals / requirements:
- [done] create 2 containers that can talk to eachother (i.e. application + database)  
- [done] use a Docker Compose YAML file to orchestrate everything
- [done] application needs to be reachable outside of container (e.g. to a URL)
- [done] demonstrate that the application & the database are connected, via an API call that returns something from the databasae


## Tests:  
Accessing http://localhost:3000/ping returns 'pong' showing app connection  
Accessing http://localhost:3000/data returns JSON object from database  


## Docker commands:

1. Go to DIR of app. 
2. run 'docker-compose up'.


## Future tasks / wishlist:  
- dev & prod Composer files, via .ENV file variables:
- - Composer (dev) needs local file access to update code files on the fly
- - Composer (prod) needs to be mounted with it's own file state (independent of local)
- container clusters (Docker Swarm / Kubernetes)  
- Docker Swarm / Kubernetes: auto-scaling  
- 
