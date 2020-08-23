import TransactionModel from '../models/transaction.model'
import Validator from 'validatorjs'
import { formatBalanceSheet } from '../helpers/transaction.helper'

export const listTransaction = async (req, res) => {
  try {
    let transactions = await TransactionModel.find({}).sort({ created: -1 }).lean()

    let formattedTransactions = formatBalanceSheet(transactions)

    return res.success('Transactions List', { transactions: formattedTransactions })
  } catch (err) {
    console.log(err)
    res.error()
  }
}

export const addTransaction = async (req, res) => {

  try {

    let validator = new Validator(req.body, {
      description: 'required',
      amount: 'required|numeric|min:1',
      type: 'required|digits_between:0,1'
    })

    if (validator.fails()) {
      return res.error('Validation Failed', 422, {
        errors: validator.errors.errors
      })
    }

    let transaction = new TransactionModel(req.body)
    await transaction.save()

    res.success('Transaction added successfully', {
      transaction
    })
  } catch (err) {
    console.log(err)
    res.error()
  }
}