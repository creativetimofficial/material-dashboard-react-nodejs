const { wrap } = require('async-middleware');
const router = require('express').Router();

const { logout } = require('./commands/logout');

router.post('/', wrap(logout));

module.exports = router;
