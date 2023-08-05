'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
    allowNull:false,
    unique:true
  },
    row: {
      type:DataTypes.INTEGER,
    allowNull:false
  },
    col: {
      type:DataTypes.INTEGER,
    allowNull:false
  },
    type: {
      type:DataTypes.STRING,
    
  }
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};