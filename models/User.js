
const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/dbPool');
const User = sequelize.define('users', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  deviceToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  loginType: {
    type: DataTypes.ENUM('kakao', 'google', 'naver', 'apple', 'novice'),
    allowNull: true,
  },
  userState: {
    type: DataTypes.ENUM('user', 'admin', 'banned', 'withdraw'),
    allowNull: true,
  },
  withdrawReason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User;
