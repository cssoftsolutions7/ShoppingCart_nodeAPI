// databaseConnection.js
const mssql = require('mssql');
const config = require('./dbConfig');

class DatabaseConnection {
  constructor() {
    this.pool = null;
  }

  async connect() {
    try {
      this.pool = await mssql.connect(config);
      console.log('Connected to the MSSQL database!');
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }

  async close() {
    try {
      if (this.pool) {
        await this.pool.close();
        console.log('Database connection closed!');
      }
    } catch (error) {
      console.error('Error closing database connection:', error);
    }
  }
}

module.exports = DatabaseConnection;
