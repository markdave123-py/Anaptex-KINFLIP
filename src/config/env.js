import dotenv from "dotenv";

dotenv.config();


export const config = Object.freeze({
    // PORT
    port: process.env.PORT || 4500,
    mongodb_uri: process.env.MONGODB_URL

})