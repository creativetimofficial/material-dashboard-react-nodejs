const { wrap } = require('async-middleware');
const router = require('express').Router();

const requestBodyValidation = require('./commands/verify-request-body');
const updateUserInfo = require('./commands/update-user-info');

router.post('/update-profile-info', wrap(requestBodyValidation), wrap(updateUserInfo));

module.exports = router;
