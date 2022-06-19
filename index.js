'use strict';

const { sequelize, UserModel, UserMessageModel } = require('./src/models');
const server = require('./src/server');

// creates tables and checks connection.
sequelize
  .sync()
  .then(() => {
    console.log('USER Success');
    UserModel.create({
      userName: 'Bob',
      age: 54,
      email: 'bob@protonmail.ch',
    });
    console.log('USER MODEL Success');
    UserMessageModel.create({
      recipient: 'Tom Hanks',
      sender: 'John Malkovich',
      messageBody: 'This is the best message!',
    });
  })
  .catch((err) => console.log(err));

server.start();
