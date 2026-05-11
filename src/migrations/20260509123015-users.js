'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
await queryInterface.createTable('users', {
   id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  email: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false
  },

})

await queryInterface.createTable ('escolas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  cnpj: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  update_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    onUpdate: Sequelize.NOW
  }
})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('escolas');
    await queryInterface.dropTable('users');
  }
};
