const Knex = require('knex');
const knexConfig = require('./knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);

module.exports = knex;
