'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class FundSkills extends Model {
    static associate(models) {
      // FundSkills.belongsTo(models.Funds, {
      //   foreignKey: 'skillId',
      //   targetKey: 'id',
      // });
    }
  }
  FundSkills.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Funds',
        //   key: 'id',
        // },
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
      modelName: 'FundSkills',
      timestamps: true,
    }
  );
  return FundSkills;
};
