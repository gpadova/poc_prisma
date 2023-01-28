import Joi from "joi";

export const playerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().integer().required(),
    teamId: Joi.number().integer().required(),
})