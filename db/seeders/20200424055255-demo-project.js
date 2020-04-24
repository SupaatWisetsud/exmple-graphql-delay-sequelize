'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.sequelize.query(`
      
    // `);
    return queryInterface.bulkInsert('spo_project', [{
      project_name: "demo 1",
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
