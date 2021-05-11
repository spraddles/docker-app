if (process.env.NODE_ENV !== 'development') {
  require('dotenv').config({path: './.env-dev'});
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: './.env-prod'});
}

module.exports = {
  client: 'pg',
  connection: {
    // Important: host is the same name as the Docker container DB service
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

    /*host: 'database',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'*/

  },
  migrations: {
    directory: __dirname + '/migrations'
  },
  seeds: {
    directory: __dirname + '/seeds'
  }
};