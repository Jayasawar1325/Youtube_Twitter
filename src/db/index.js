import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
        // eslint-disable-next-line no-undef
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('Database connected successfully!!',connectionInstance.connection.host)
    }
    catch(err){
        console.log('Error connecting database', err)
        // eslint-disable-next-line no-undef
        process.exit(1)
    }
}
export {connectDB}