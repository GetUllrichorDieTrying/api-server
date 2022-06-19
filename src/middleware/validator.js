'use strict';

function validator(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Try entering writing your quert differently.');
  }
  next();
}

module.exports = validator;
