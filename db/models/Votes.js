'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Votes = sequelize.define(
  'Votes',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    fundId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Funds',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
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
    modelName: 'Votes',
    sequelize,
  }
);

Votes.associate = function (models) {
  Votes.belongsTo(models.Funds, {
    foreignKey: 'fundId',
    targetKey: 'id',
  });

  Votes.belongsTo(models.user, {
    foreignKey: 'userId',
    targetKey: 'id',
  });
};

module.exports = Votes;
