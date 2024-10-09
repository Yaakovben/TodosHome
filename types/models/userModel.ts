import mongoose, { Model, Schema } from "mongoose";
import User from "../DTO/userDto";
import Todo from "../DTO/todoDto";

export const todoSchema:Schema<Todo> = new mongoose.Schema({
    title:{
        type:String,
        required :[true,"The Title of the mission is required"],
    },
    body:{
        type:String,
        required :[true,"The Body of the mission is required"],
    }
})


export const userSchema:Schema<User> = new mongoose.Schema({
    user_name:{
        type:String,
        required :[true,"user name is required"],
        minlength: [5, "way too short name, please enter at least 5 chars"]
    },
    password:{
        type:String,
        required:[true,"password must be provided"]
    },
    todosArray:{
        Array:[todoSchema]
    }
})


const userModel:Model<User> = mongoose.model("user",userSchema)

export default userModel  
