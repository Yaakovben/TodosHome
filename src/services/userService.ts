import userModel from "../../types/models/userModel"
import userDTO from '../../types/DTO/userDto'

export const createUser = async (user:userDTO):Promise<string> =>{
    try {
        const {user_name, password} = user
        if(!user_name || !password){
            throw  Error("Password and name required");
            
        }
        const dbUser = new userModel({
            user_name,
            password
        })
        const saving =  await dbUser.save()
        return saving.id
    } catch (err) {
        console.log(err);   
        throw err 

    }
}

export const getAllUsers = async():Promise<Array<userDTO>> => {
    try {
        const users:userDTO[] = await userModel.find()
        if(!users ||users.length ==0){
            throw Error("There are no users in the system");
        }
        return users
    } catch (err) {
        console.log(err);
        throw err
    }
}