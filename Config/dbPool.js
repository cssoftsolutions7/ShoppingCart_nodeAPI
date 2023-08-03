// dbPool.js
const mssql = require('mssql');
const config = require('./dbConfig');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.server,
  dialect: 'mssql',
});
// Synchronize models with the database
(async () => {
    try {
      await sequelize.sync();
      console.log('Database synchronized successfully!');
    } catch (error) {
      console.error('Error synchronizing database:', error);
    }
  })();
module.exports = { sequelize }; // Export the Sequelize instance within an objectt
