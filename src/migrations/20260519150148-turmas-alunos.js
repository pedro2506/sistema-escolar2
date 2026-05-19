'use strict';

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
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'alunos',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('turmas_alunos');

  }

};