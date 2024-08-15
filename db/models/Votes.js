'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Votes extends Model {
    static associate(models) {
      Votes.belongsTo(models.Funds, {
        foreignKey: 'fundId',
        targetKey: 'id',
      });

      Votes.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
      });
    }
  }
  Votes.init(
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
          model: 'user',
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now(),
      },
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: 'Votes',
      timestamps: true,
    }
  );
  return Votes;
};
