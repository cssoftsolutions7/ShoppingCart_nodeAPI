// const { Sequelize } = require('sequelize');
// const config = require('./dbconfig');

// // Initialize Sequelize with your database configuration
// const sequelize = new Sequelize(
//     config.database,
//     config.user,
//     config.password,
//     {
//       host: config.server,
//       dialect: 'mssql',
//       dialectOptions: {
//         options: {
//           encrypt: config.options.encrypt,
//           enableArithAbort: config.options.enableArithAbort,
//           instanceName: config.instanceName,
//         },
//       },
//       pool: {
//         max: 10, // Maximum number of connections in the pool
//         min: 0, // Minimum number of connections in the pool
//         idle: 10000, // Idle time in milliseconds before a connection is closed
//       },
//     }
//   );


// // Test the database connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// testConnection();

// module.exports = sequelize;




const { Sequelize } = require('sequelize');
const config = require('./dbconfig');

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.server,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: config.options.encrypt,
        enableArithAbort: config.options.enableArithAbort,
        instanceName: config.instanceName,
      },
    },
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  }
);

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Export the sequelize instance directly
module.exports = { sequelize, testConnection };





