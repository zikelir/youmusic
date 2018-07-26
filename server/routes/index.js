const express = require('express');

const apiRouter = express.Router();

const getLocations = (req, res) => {
  console.log('bla');
}

apiRouter.get('/locations', getLocations);

module.exports = apiRouter;