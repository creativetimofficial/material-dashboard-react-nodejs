const debug = require('debug')('express:login');

const { FETCH_INFO_ERROR_MESSAGE } = require('../constants');
const { getUserById } = require('../repository');

async function redirectToDashboard(req, res) {
  let userInfo;
  const { user } = req;
  try {
    userInfo = await getUserById(user && user.id);
  } catch (getUserError) {
    const messages = {
      errors: {
        databaseError: FETCH_INFO_ERROR_MESSAGE,
      },
    };

    return res.status(500).render('pages/login', { messages });
  }

  debug('login:redirectToDashboard');
  req.session.userInfo = { ...userInfo };
  return res.redirect('/');
}

module.exports = redirectToDashboard;
