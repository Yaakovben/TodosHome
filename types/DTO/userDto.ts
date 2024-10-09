import Todo from "./todoDto";
import { Document } from "mongoose";
interface User extends Document{
    user_name:string,
    password:string
    todosArray:Todo[]
}

export default User