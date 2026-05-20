const Transaction = require('../models/transactionModel');
const Joi = require('joi');

const createTransaction = async (req, res) => {
  const schema = Joi.object({
    amount: Joi.number().required(),
    type: Joi.string().valid('credit', 'debit').required()
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = new Transaction({
    amount: req.body.amount,
    type: req.body.type
  });
  await transaction.save();
  res.send(transaction);
};

const getTransactions = async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
};

const getTransactionById = async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

const updateTransaction = async (req, res) => {
  const schema = Joi.object({
    amount: Joi.number(),
    type: Joi.string().valid('credit', 'debit')
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

const deleteTransaction = async (req, res) => {
  const transaction = await Transaction.findByIdAndRemove(req.params.id);
  if (!transaction) return res.status(404).send('Transaction not found');
  res.send(transaction);
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
};