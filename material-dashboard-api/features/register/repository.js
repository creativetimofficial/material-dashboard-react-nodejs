const bcrypt = require('bcrypt');
const knex = require('../../db');

async function createUser({ name, username: email, password }) {
  const hashedPass = await bcrypt.hash(password, 5);
  const [user] = await knex('users')
    .insert({
      name,
      email,
      password: hashedPass,
      created_at: new Date(),
      updated_at: new Date(),
      email_verified_at: new Date(),
    })
    .returning(['email', 'name']);
  return user;
}

module.exports = {
  createUser,
};
