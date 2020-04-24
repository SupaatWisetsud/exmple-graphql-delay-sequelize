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
        
        queryInterface.createTable('spare_parts', {
          spare_parts_no: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          spare_parts_name: {
            type: Sequelize.STRING
          }
        }, {transaction: t}),

        queryInterface.createTable('spare_part_to_project', {
          spare_part_to_project_no: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          project_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: 'spo_project', key: 'project_no' }
          },
          spare_parts_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: 'spare_parts', key: 'spare_parts_no'}
          },
          onhand: Sequelize.INTEGER,
          on_pr: Sequelize.INTEGER,
          risk_of_stockout: Sequelize.FLOAT,
          demand: Sequelize.INTEGER,
          Criticality: Sequelize.STRING,
          eq_a: Sequelize.INTEGER,          
          eq_b: Sequelize.INTEGER,          
          eq_c: Sequelize.INTEGER,          
          pc_cost: Sequelize.INTEGER,          
          pc_lt: Sequelize.INTEGER,          
          pc_cbm: Sequelize.INTEGER,          
          lt: Sequelize.STRING,          
          unit_cost: Sequelize.INTEGER,          
          ss: Sequelize.INTEGER,          
          max: Sequelize.INTEGER,          
          min: Sequelize.INTEGER,          
        })

      ]);

    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.dropTable('spo_project', {transaction: t}),
        queryInterface.dropTable('spare_parts', {transaction: t}),
        queryInterface.dropTable('spare_part_to_project', {transaction: t})
      ])
    })
  }
};