const Joi = require("joi");

const validMessage = (data) => {
    const shema = Joi.object({
        name: Joi.string().min(4).max(40).required(),
        jober: Joi.string().min(4).max(40).required(),
        message: Joi.string().empty('').default('нет комментария').max(400),
    });

    return shema.validate(data);
};


module.exports= validMessage;