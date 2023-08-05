'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightno: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      airplaneid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
         model:'Airplanes',
         key:'id'
        },
        onDelete:'CASCADE'
      },
      departureAirportid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Airports',
         key:'code'
        },
        onDelete:'CASCADE'
      },
      arrivalAirportid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Airports',
         key:'code'
        },
        onDelete:'CASCADE'
      },
      arrivaltime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      departuretime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      bordinggate: {
        type: Sequelize.INTEGER
      },
      totalseats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flights');
  }
};