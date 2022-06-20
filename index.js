'use strict';

const {
  sequelize,
  UserInterface,
  UserMessageInterface,
} = require('./src/models');
const server = require('./src/server');

// creates tables and checks connection.
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('USER Success');
    UserInterface.create({
      userName: 'Bob',
      age: 54,
      email: 'bob@protonmail.ch',
    });
    console.log('USER MODEL Success');
    UserMessageInterface.create({
      recipient: 'Tom Hanks',
      userId: 1,
      sender: 'John Malkovich',
      messageBody: 'This is the best message!',
    });
  })
  .catch((err) => console.log(err));

server.start();
