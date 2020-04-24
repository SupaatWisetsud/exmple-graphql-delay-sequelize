import Sequelize from 'sequelize';
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION);

sequelize.authenticate().then(()=>{
  console.log('Connection has been established successfully.');
});
  