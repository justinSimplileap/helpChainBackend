'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Donations extends Model {
    static associate(models) {
      Donations.belongsTo(models.Funds, {
        foreignKey: 'fundId',
        targetKey: 'id',
      });

      Donations.belongsTo(models.user, {
        foreignKey: 'userId',
        targetKey: 'id',
      });
    }
  }
  Donations.init(
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
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: 'Donations',
      timestamps: true,
    }
  );
  return Donations;
};
