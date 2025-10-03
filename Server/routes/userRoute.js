import express from 'express'
import { listUser,loginUser,registerUser } from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/list',listUser)
userRoute.post('/login',loginUser)
userRoute.post('/register',registerUser)


export default userRoute