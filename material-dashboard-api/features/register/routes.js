const { wrap } = require('async-middleware');
const router = require('express').Router();

const requestBodyValidation = require('./commands/verify-request-body');
const createUser = require('./commands/create-user');

router.post('/', wrap(requestBodyValidation), wrap(createUser));

module.exports = router;
