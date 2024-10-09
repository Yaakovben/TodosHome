import mongoose from 'mongoose'

const connectToMongo = async ():Promise<void> => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todos_home')
        console.log("successfully connected to mongoDB");
        
    } catch (err) {
        console.log(err);
        
    }
}

export default connectToMongo