import {Request, Response} from 'express'
import {createUser, getAllUsers} from '../services/userService'
export const register = async (req:Request, res:Response):Promise<void> =>{
    try {
        const idUser = await createUser(req.body)
        res.status(201).json({
            user_id: idUser,
            msg:`User ${req.body.user_name} created `

        })
    } catch (err) {
        res.status(401).json((err as Error).message)
    }
}


export const getUsers = async (req:Request, res:Response):Promise<void> =>{
    try {
        const users = await getAllUsers()
        res.status(201).json({
            msg:"This is all users",
            users:users
        })
    } catch (err) {
        res.status(401).json((err as Error).message)
    }
}