'use strict';
const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      surname: {
        
        type: Sequelize.STRING(20),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      document: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      document: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      document_type: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      ...CreatedAndUpdated
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alunos');
  }
};