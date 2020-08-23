import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  description: {
    type: 'String',
    required: true,
    trim: true
  },
  amount: {
    type: 'Number',
    required: true
  },
  type: {
    type: 'Boolean',
    required: true
    // true for Credit,
    // false for Debit
  },
  created: {
    type: 'Date',
    default: Date.now
  }
})

export default mongoose.model('Transaction', TransactionSchema)