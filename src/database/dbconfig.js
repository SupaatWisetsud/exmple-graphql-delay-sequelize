import Sequelize from 'sequelize';
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION,{
    logging: false,
});

export default sequelize;