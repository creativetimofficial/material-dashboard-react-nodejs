const { wrap } = require('async-middleware');

const loadPage = require('./commands/load-page');

module.exports = router => {
  router.get('/reset-password', wrap(loadPage));

  return router;
};
