const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/dbPool');

const Group = sequelize.define('group', {
  id: {
    type: DataTypes.STRING,
    // autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  groupColorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  groupIconId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

Group.tableName = 'group';

module.exports = Group;
