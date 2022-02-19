require('dotenv').config();

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

module.exports = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+08:00',
};
