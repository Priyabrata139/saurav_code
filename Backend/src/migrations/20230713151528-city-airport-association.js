'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint(
      'airports',
      {
        type: 'foreign key',
        fields:['cityid'],
        name: 'city_id_fk',
        references: {
          table: 'cities',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('airports', 'city_id_fk')
    
  }
};
