function logout(req, res) {
  req.logout();
  req.session.destroy(() => {
    res.clearCookie(process.env.SESSION_COOKIE_NAME);
    res.status(301).redirect('/login');
  });
}

module.exports = {
  logout,
};
