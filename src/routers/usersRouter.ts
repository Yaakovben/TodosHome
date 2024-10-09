import exp,{Router} from 'express'
import {register, getUsers}from '../controllers/userController'

const router:Router = Router()


router.get('/',getUsers)

router.post('/register', register)

export default router
   
