'use strict';

const CreatedAndUpdated = require('../helpers/CreatedAndUpdated');

/** @type {import('sequelize-cli').Migration} */

module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('turmas', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      curso_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'cursos',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      colaborador_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

        references: {
          model: 'colaboradores',
          key: 'id'
        },

        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },

      name: {
        type: Sequelize.CHAR(4),
        allowNull: false
      },

      room: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      start_time: {
        type: Sequelize.TIME
      },

      end_time: {
        type: Sequelize.TIME
      },

      start_date: {
        type: Sequelize.DATEONLY
      },

      end_date: {
        type: Sequelize.DATEONLY
      },

      ...CreatedAndUpdated

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('turmas');

  }

};