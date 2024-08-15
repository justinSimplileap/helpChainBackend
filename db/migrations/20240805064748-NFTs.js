'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NFTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      metadata: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      purchaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NFTs');
  },
};
