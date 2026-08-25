import dotenv from "dotenv"
import connectDB from "./db/index.js";

import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);


dotenv.config({
    path: './env'
})

connectDB()















/*
import express from "express"
const app = express()


;( async () => {
    try {
        await mongoose.connect(`{process.env.M0NGODB_URL}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.Port, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
}) ()

*/