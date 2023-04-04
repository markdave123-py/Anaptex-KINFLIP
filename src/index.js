import express from "express";
import cors from 'cors'
import { connectDB } from "./config/DbConn.js";
import { config } from "./config/env.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());


connectDB();

app.listen(config.port, () => {
    console.log(`port running on ${config.port}`)
})
