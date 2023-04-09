import express from "express";
import cors from 'cors'
import { connectDB } from "./config/DbConn.js";
import { config } from "./config/env.js";
import { speakerRouter, attendeeRouter, getRouter } from "./routes/routes.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/',speakerRouter);
app.use('/',attendeeRouter);
app.use('/', getRouter)

app.use('*', ( req, res, next) => {
    console.log(req.route)
    res.status(404).json({
        message: 'route not found'
    });
});


connectDB();

app.listen(config.port, () => {
    console.log(`port running on ${config.port}`)
})
