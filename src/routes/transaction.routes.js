import express from 'express'
import { 
  listTransaction,
  addTransaction 
} from '../controllers/transaction.controller'

const router = express.Router()

router.get('/', listTransaction)
router.post('/', addTransaction)

export default router