'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class NFTs extends Model {
    static associate(models) {
      NFTs.belongsTo(models.Funds, {
        foreignKey: 'fundId',
        targetKey: 'id',
      });

      NFTs.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id',
      });
    }
  }
  NFTs.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      metadata: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now(),
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
      modelName: 'NFTs',
      timestamps: true,
    }
  );
  return NFTs;
};
