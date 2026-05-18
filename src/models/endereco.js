'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Endereco.init({
    aluno_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    uf: DataTypes.STRING,
    street: DataTypes.STRING,
    complement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Endereco',
  });
  return Endereco;
};