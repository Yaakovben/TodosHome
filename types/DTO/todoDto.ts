import {Document} from 'mongoose'

interface Todo extends Document{
    title:string
    body:string
}

export default Todo