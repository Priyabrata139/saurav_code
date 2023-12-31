'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.city,{
        foreignKey:'cityid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }),
      this.hasMany(models.flight,{
        foreignKey:'arrivalAirportid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }),
      this.hasMany(models.flight,{
        foreignKey:'departureAirportid',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  Airport.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    code: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    },
    address: {
      type:DataTypes.STRING,
      unique:true
    },
    cityid: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};