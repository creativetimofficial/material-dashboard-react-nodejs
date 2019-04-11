const { updateUserInfo } = require('../repository');
const { UPDATE_INFO_SUCCESS_MESSAGE, UPDATE_INFO_ERROR_MESSAGE } = require('../constants');

async function updateUser(req, res) {
  let user = {};
  const {
    user: { id },
  } = req;
  const profileSuccessMessage = UPDATE_INFO_SUCCESS_MESSAGE;
  try {
    user = await updateUserInfo({ ...req.body, id });
  } catch (error) {
    user = error;
  }

  if (user.email) {
    req.session.messages = { success: profileSuccessMessage };
    req.session.userInfo = { ...user };
    res.redirect('/profile');
  }

  const databaseError = UPDATE_INFO_ERROR_MESSAGE;
  req.session.messages = { errors: { databaseError } };
  res.redirect('/profile');
}

module.exports = updateUser;
