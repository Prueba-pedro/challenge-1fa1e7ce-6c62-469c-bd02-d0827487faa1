const Joi = require('joi');

const createTransactionDto = Joi.object({
  amount: Joi.number().required(),
  type: Joi.string().valid('credit', 'debit').required()
});

const updateTransactionDto = Joi.object({
  amount: Joi.number(),
  type: Joi.string().valid('credit', 'debit')
});

module.exports = { createTransactionDto, updateTransactionDto };