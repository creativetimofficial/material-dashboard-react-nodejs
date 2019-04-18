const { wrap } = require('async-middleware');
const router = require('express').Router();

const verifyRequestBody = require('./commands/verify-request-body');
const login = require('./commands/login');
const redirectToDashboard = require('./commands/redirect-to-dashboard');

router.post('/', wrap(verifyRequestBody), wrap(login), wrap(redirectToDashboard));

module.exports = router;
