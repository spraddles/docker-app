# Instructions
- install project & dependencies
* run Docker via the below commands:
  * DEV: docker-compose --env-file ./.env-dev up 
  * PROD: docker-compose --env-file ./.env-prod up  


## Tests:  
1. Dev test:  
Accessing http://localhost:7999/ping returns 'pong' showing app connection  
Accessing http://localhost:7999/data returns JSON object from database  

2. Prod test:  
Accessing http://localhost:8111/ping returns 'pong' showing app connection  
Accessing http://localhost:8111/data returns JSON object from database  
