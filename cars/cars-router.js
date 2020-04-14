const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile');

const db = knex(knexfile.development);

const router = express.Router();

module.exports = router;