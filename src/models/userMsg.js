'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('userMsg', {
    recipient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    messageBody: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
