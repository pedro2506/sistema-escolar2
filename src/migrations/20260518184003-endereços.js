'use strict';
const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aluno_id: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      ...CreatedAndUpdated
    });
  },
  async down(queryInterface, Sequelize) {
  }
};