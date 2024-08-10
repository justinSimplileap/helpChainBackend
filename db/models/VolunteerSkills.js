'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class VolunteerSkills extends Model {
    static associate(models) {}
  }
  VolunteerSkills.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      skillName: {
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
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      paranoid: true,
      freezeTableName: true,
      modelName: 'VolunteerSkills',
      timestamps: true,
    }
  );
  return VolunteerSkills;
};
