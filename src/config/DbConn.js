import mongoose from "mongoose";
import { config } from "./env.js";
import dotenv from "dotenv"

dotenv.config()

export const connectDB =  async ()=>{
    try{
        const conn = await mongoose.connect(config.MONGODB_URL)
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
         //passing 1 - will exit the proccess with error
    }

}