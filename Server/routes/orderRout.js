import express  from 'express'
import  authMiddleware from '../midlleware/auth.js'
import { placeOrder,verifyOrder,userOrders, listOredrs ,updateStatus } from '../controllers/orderController.js'


const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,userOrders)
orderRouter.get('/list',listOredrs)
orderRouter.post('/updateStatus',updateStatus)

export default orderRouter