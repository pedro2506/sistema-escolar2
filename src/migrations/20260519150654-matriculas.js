'use strict';

const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('matriculas', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      registration: {
        type: Sequelize.STRING(20),
        allowNull: false
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'alunos',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'turmas',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },

      ...CreatedAndUpdated

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('matriculas');

  }

};