import express from 'express'
import { addToCart,getCart,removeCartItem } from '../controllers/cartController.js'
import authMiddleware from '../midlleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authMiddleware,getCart)
cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/remove',authMiddleware,removeCartItem)


export default cartRouter
