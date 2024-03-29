require('dotenv').config({ path: __dirname + '/../.env' });
console.log( process.env.DB_NAME);

// Default configuration for database connection
let connection = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8',
  timezone: 'UTC'
};


module.exports = {
  connection,
  client: process.env.DB_CLIENT,
  migrations: {
    tableName: 'migrations',
    directory: './migration',
    stub: './stubs/migration.stub'
  },
  seeds: {
    directory: './seeds',
    stub: './stubs/seed.stub'
  }
};