#!/bin/bash
npm run db:rollback
npm run db:migrate
npm run db:seed
npm run $NODE_APP_ENV