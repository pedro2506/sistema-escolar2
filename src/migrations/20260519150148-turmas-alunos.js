'use strict';

const CreatedAndUpdated = require('../models/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('turmas_alunos', {

      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'turmas',
          key: 'id'
        }
        },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'alunos',
          key: 'id'
      }
    },
      })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('turmas_alunos');

  }

};