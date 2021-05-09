module.exports = {
  client: 'pg',
  connection: {
    // host is the same name as the Docker container DB service
    host: 'database',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
  },
  migrations: {
    directory: __dirname + '/migrations'
  },
  seeds: {
    directory: __dirname + '/seeds'
  }
};