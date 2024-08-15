'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Funds = sequelize.define(
  'Funds',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title cannot be null',
        },
        notEmpty: {
          msg: 'Title cannot be empty',
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pointsPerVolunteer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: 'Funds',
    sequelize,
  }
);

// Custom methods or associations can be added here
Funds.associate = function (models) {
  // Define associations here
  // Funds.belongsTo(models.user, {
  //   foreignKey: 'managerId',
  //   as: 'manager',
  // });
};

module.exports = Funds;
