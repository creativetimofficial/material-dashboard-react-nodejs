const { wrap } = require('async-middleware');

const requestBodyValidation = require('./commands/verify-request-body');
const updateUserInfo = require('./commands/update-user-info');

const loadPage = require('./commands/load-page');

module.exports = (router, middlewares = []) => {
  router.get('/profile', middlewares.map(middleware => wrap(middleware)), wrap(loadPage));

  router.post('/update-profile-info', wrap(requestBodyValidation), wrap(updateUserInfo));

  return router;
};
