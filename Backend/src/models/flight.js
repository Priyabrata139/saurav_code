'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }),
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }),
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      
    }
  }
  flight.init({
    flightno: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    airplanrid: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    departureAirportid: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    arrivalAirportid: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    arrivaltime: {
      type:DataTypes.DATE,
      allowNull: false,
    },
    departuretime: {
      type:DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    bordinggate: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    totalseats: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'flight',
  });
  return flight;
};