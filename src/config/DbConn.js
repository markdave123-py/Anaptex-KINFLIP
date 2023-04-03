import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDB =  async ()=>{

    try{
        
        const conn = await mongoose.connect(process.env.MONGODB_URL,{
            //must add in order to not get any error masseges:
            useUnifiedTopology:true,
            useNewUrlParser: true
        })
        console.log(`mongo database is connected!!! ${conn.connection.host} `)
    }catch(error){
        console.error(`Error: ${error} `)
         //passing 1 - will exit the proccess with error
    }

}