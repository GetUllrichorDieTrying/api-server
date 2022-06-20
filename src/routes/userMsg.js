'use strict';

const express = require('express');
const { UserMessageInterface } = require('../models');

const router = express.Router();

// CREATE / POST
router.post('/userMsg', async (req, res, next) => {
  console.log(req.body);
  let userMsg = req.body;
  let response = await UserMessageInterface.create(userMsg);
  res.status(200).send(response);
});

// READ / GET ALL
router.get('/userMsg', async (req, res, next) => {
  let allMessages = await UserMessageInterface.readAll();
  res.status(200).send(allMessages);
});

// READ / GET ONE
router.get('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneMessage = await UserMessageInterface.readOne(id);
  res.status(200).send(oneMessage);
});

// UPDATE / PUT
router.put('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let updatedMessage = await UserMessageInterface.update(id);
  res.status(200).send(updatedMessage);
});

// DELETE / DELETE
router.delete('/userMsg/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedMessage = await UserMessageInterface.delete(id);
  res.status(200).send(deletedMessage);
});

module.exports = router;
