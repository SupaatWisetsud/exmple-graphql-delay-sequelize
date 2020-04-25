'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {

      return Promise.all([

        queryInterface.createTable('spo_spare_part_to_project', {
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
            references: { model: 'spo_spare_parts', key: 'spare_parts_no'}
          },
          unit_cost: {type: Sequelize.INTEGER},
          oty_per_issue: {type: Sequelize.INTEGER},
          leadtime: {type: Sequelize.INTEGER},
          annual_usage: {type: Sequelize.INTEGER},
          cost_of_stock_out: {type: Sequelize.INTEGER},
          purchase_cost: {type: Sequelize.INTEGER},
          purchase_period: {type: Sequelize.INTEGER},
          shelf_life: {type: Sequelize.INTEGER},
          evaluation_period: {type: Sequelize.INTEGER},
          confidence_level: {type: Sequelize.INTEGER},
          service_factor: {type: Sequelize.INTEGER},
          stock_overhead: {type: Sequelize.INTEGER},
          max: {type: Sequelize.INTEGER},
          min: {type: Sequelize.INTEGER},
          safety_stock: {type: Sequelize.INTEGER},
          eoq: {type: Sequelize.STRING},
          stock_cost: {type: Sequelize.INTEGER},
          risk_of_not_having_stock: {type: Sequelize.FLOAT},
          risk_of_not_having_stock_during_lead_time: {type: Sequelize.FLOAT},
          incremental_increase: {type: Sequelize.FLOAT},
          cost_vs_risk_ratio: {type: Sequelize.FLOAT},
        })

      ]);

    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.dropTable('spo_spare_part_to_project', {transaction: t})
      ])
    })
  }
};