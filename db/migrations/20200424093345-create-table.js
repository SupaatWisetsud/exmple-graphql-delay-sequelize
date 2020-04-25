'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {

      return Promise.all([

        queryInterface.createTable('spo_project', {
          project_no: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          project_name: {
            allowNull: false,
            type: Sequelize.STRING
          },
          is_draft: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
          }
        }, {transaction: t}),
        
        queryInterface.createTable('spo_spare_parts', {
          spare_parts_no: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          spare_parts_name: {type: Sequelize.STRING},
          onhand: {type: Sequelize.INTEGER, defaultValue: 0},
          on_pr: {type: Sequelize.INTEGER, defaultValue: 0},
          risk_of_stockout: {type: Sequelize.FLOAT, defaultValue: 0},
          demand: {type: Sequelize.INTEGER, defaultValue: 0},
          criticality: Sequelize.STRING,
          eq_a: {type: Sequelize.INTEGER, defaultValue: 0},          
          eq_b: {type: Sequelize.INTEGER, defaultValue: 0},          
          eq_c: {type: Sequelize.INTEGER, defaultValue: 0},          
          pc_cost: {type: Sequelize.INTEGER, defaultValue: 0},          
          pc_lt: {type: Sequelize.INTEGER, defaultValue: 0},          
          pc_cbm: {type: Sequelize.INTEGER, defaultValue: 0},          
          lt: {type: Sequelize.INTEGER, defaultValue: 0},          
          unit_cost: {type: Sequelize.INTEGER, defaultValue: 0},          
          ss: {type: Sequelize.INTEGER, defaultValue: 0},          
          max: {type: Sequelize.INTEGER, defaultValue: 0},          
          min: {type: Sequelize.INTEGER, defaultValue: 0}, 
        }, {transaction: t}),
      ]);

    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.dropTable('spo_project', {transaction: t}),
        queryInterface.dropTable('spo_spare_parts', {transaction: t}),
      ])
    })
  }
};