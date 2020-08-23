import express from 'express'
import TransactionRoutes from './transaction.routes'

const router = express.Router()
router.use('/transactions', TransactionRoutes)

export default router