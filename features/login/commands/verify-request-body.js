const Joi = require('joi');

const constants = require('../constants');

const { PASSWORD_MAX, PASSWORD_MIN } = constants;

const schema = Joi.object().keys({
  username: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string()
    .min(PASSWORD_MIN)
    .max(PASSWORD_MAX),
});

module.exports = async function validate(req, res, next) {
  let payloadValidation = {};
  try {
    payloadValidation = await Joi.validate(req.body, schema, { abortEarly: false });
  } catch (validateRegisterError) {
    payloadValidation = validateRegisterError;
  }
  const { details } = payloadValidation;
  let errors;

  if (details) {
    errors = {};
    details.forEach(errorDetail => {
      const {
        path: [key],
        type,
      } = errorDetail;
      const errorType = type.split('.')[1];
      errors[key] = constants[`${key.toUpperCase()}_${errorType.toUpperCase()}_ERROR`];
    });
  }

  if (errors) {
    req.session.messages = { errors };
    return res.status(400).redirect('/login');
  }
  return next();
};
