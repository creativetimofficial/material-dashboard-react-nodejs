const Knex = require('knex');
const bcrypt = require('bcrypt');

const knexConfig = require('../../db/knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV]);

async function getUserForLoginData(email, password) {
  const [user] = await knex('users')
    .select()
    .where({ email })
    .limit(1);

  if (!user) {
    return null;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  return {
    id: user.id,
    username: user.email,
    created_at: user.created_at,
  };
}

async function getUser(query) {
  const [user] = await knex('users')
    .select()
    .where(query)
    .limit(1);
  return user;
}

async function getUserById(id) {
  return getUser({ id });
}

module.exports = {
  getUserForLoginData,
  getUserById,
};
