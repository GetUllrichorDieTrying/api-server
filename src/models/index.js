'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const modelInterface = require('./modelInterface');
const userSchema = require('./user');
const userMessageSchema = require('./userMsg');

const DATABASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'sqlite::memory'
    : process.env.DATABASE_URL || 'postgres://localhost:5432/gudt-api-server';

const sequelize = new Sequelize(DATABASE_URL);
const UserModel = userSchema(sequelize, DataTypes);
const UserMessageModel = userMessageSchema(sequelize, DataTypes);

// create associations between tables
// UserModel.hasMany(UserMessageModel, {
//   foreignKey: 'userId',
//   sourceKey: 'id',
// });
// UserMessageModel.belongsTo(UserModel, {
//   foreignKey: 'userId',
//   targetKey: 'id',
// });

UserModel.hasMany(UserMessageModel);
UserMessageModel.belongsTo(UserModel);

module.exports = {
  sequelize,
  UserInterface: new modelInterface(UserModel),
  UserMessageInterface: new modelInterface(UserMessageModel),
};
