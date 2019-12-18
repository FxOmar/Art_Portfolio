const Joi = require('joi')

const registerValidation = (data) => {
    const schema = {
        username: Joi.string()
            .min(3)
            .max(30)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    }
    return Joi.validate(data, schema)
}

const loginValidation = (data) => {
    const schema = {
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    }
    return Joi.validate(data, schema)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation