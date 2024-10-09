import {Request, Response} from 'express'
export const register = async (req:Request, res:Response):Promise<void> =>{
    try {
        res.status(201).json({
            msg:"todo created sucsesfuly"
        })
    } catch (err) {
        res.status(401).json(`Error creating todo: ,${err}`)
    }
}
export const get = async (req:Request, res:Response):Promise<void> =>{
    try {
        res.status(201).json({
            msg:"this is todos"
        })
    } catch (err) {
        res.status(401).json(`Error get todo: ,${err}`)
    }
}