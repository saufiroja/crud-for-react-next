const { Sequelize } = require('sequelize');

const { DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
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
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  timezone: '+08:00',
});

sequelize.authenticate().then(() => {
  console.log('connect on database');
});

module.exports = { sequelize };
