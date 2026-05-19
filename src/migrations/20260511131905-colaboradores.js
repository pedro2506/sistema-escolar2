'use strict';
const CreatedAndUpdated = require('../models/CreatedAndUpdated');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('colaboradores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      escola_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'escolas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      document: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      document_type: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      
      ...CreatedAndUpdated,
    })
  },

  async down(queryInterface, Sequelize) {
await queryInterface.dropTable('colaboradores');
  },
};