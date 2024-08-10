'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Volunteers extends Model {
    static associate(models) {
      Volunteers.belongsTo(models.user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  Volunteers.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      experience: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      points: {
        type: DataTypes.STRING,
        allowNull: true,
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
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: 'Volunteers',
      timestamps: true,
    }
  );
  return Volunteers;
};
