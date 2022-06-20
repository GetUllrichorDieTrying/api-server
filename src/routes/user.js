'use strict';

const express = require('express');
const { UserInterface } = require('../models');

const router = express.Router();

// CREATE / POST
router.post('/user', async (req, res, next) => {
  let user = req.body;
  let response = await UserInterface.create(user);
  res.status(200).send(response);
});

// READ / GET ALL
router.get('/user', async (req, res, next) => {
  let allUsers = await UserInterface.readAll();
  res.status(200).send(allUsers);
});

// READ / GET ONE
router.get('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneUser = await UserInterface.readOne(id);
  res.status(200).send(oneUser);
});

// UPDATE / PUT
router.put('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedUser = await UserInterface.update(id);
  res.status(200).send(updatedUser);
});

// DELETE / DELETE
router.delete('/user/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedUser = await UserInterface.delete(id);
  res.status(200).send(deletedUser);
});

module.exports = router;
