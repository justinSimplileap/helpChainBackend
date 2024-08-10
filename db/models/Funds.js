'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Funds extends Model {
    static associate(models) {
      Funds.belongsTo(models.User, {
        foreignKey: 'managerId',
        targetKey: 'id',
      });
      Funds.hasMany(models.FundSkills, {
        foreignKey: 'skillId',
        targetKey: 'id',
      });
    }
  }
  Funds.init(
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
      modelName: 'Funds',
      timestamps: true,
    }
  );
  return Funds;
};
