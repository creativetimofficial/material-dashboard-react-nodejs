const { wrap } = require('async-middleware');

const requestBodyValidation = require('./commands/verify-request-body');
const createUser = require('./commands/create-user');
const loadPage = require('./commands/load-page');

module.exports = router => {
  router.get('/register', wrap(loadPage));

  router.post('/register', wrap(requestBodyValidation), wrap(createUser));

  return router;
};
