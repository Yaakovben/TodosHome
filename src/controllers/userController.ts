import {Request, Response} from 'express'
export const register = async (req:Request, res:Response):Promise<void> =>{
    try {
        res.status(201).json({
            msg:"user created sucsesfuly"
        })
    } catch (err) {
        res.status(401).json(`Error creating user: ,${err}`)
    }
}
export const get = async (req:Request, res:Response):Promise<void> =>{
    try {
        res.status(201).json({
            msg:"this is users"
        })
    } catch (err) {
        res.status(401).json(`Error get user: ,${err}`)
    }
}