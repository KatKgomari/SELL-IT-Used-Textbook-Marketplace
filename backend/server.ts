import express from "express"; 
import type { Application, Request, Response } from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.ts";



dotenv.config(); // looded into process.env so it can be accessed from anywhere. And it is best that it is here because the server file is the entry way so the environment variables are loade first thing. 

const app:Application = express();   

app.get("/", (req:Request, res:Response)=>{
    res.send("Server is ready123");
});


app.listen(5000, () =>{ 
    connectDB();
    console.log("Server started at http://localhost:5000") // Once the server has successfully started, run this code
})