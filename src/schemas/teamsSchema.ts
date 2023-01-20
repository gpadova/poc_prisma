import Joi from "joi";

export const teamsSchema = Joi.object({
    name: Joi.string().min(3).required(),
    city: Joi.string().min(5).required(),
    stadium: Joi.string().min(5).required(),
})