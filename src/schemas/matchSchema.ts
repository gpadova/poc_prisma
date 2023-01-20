const Joi = require('joi')
    .extend(require('@joi/date'));

export const matchSchema = Joi.object({
    homeTeamId: Joi.number().integer().positive().required(),
    awayTeamId: Joi.number().integer().positive().required(),
    date: Joi.date().format('YYYY-MM-DD').utc()
})

export const homeGoalSchema = Joi.object({
    homeTeamGoals: Joi.boolean().required
})


export const awayGoalSchema = Joi.object({
    awayTeamGoals: Joi.boolean().required
})