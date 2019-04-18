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

    return res.status(500).send({ success: false, messages });
  }

  debug('login:redirectToDashboard');
  return res.send({ success: true, userInfo });
}

module.exports = redirectToDashboard;
