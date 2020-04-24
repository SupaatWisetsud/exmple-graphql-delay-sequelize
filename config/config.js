const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    url:process.env.DB_CONNECTION,
    "migrationStorage": "json",
    // dialect: 'mysql',
  }
}