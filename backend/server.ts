// Entry point for the api

//Importing Express and creating an express app
import express from "express"; // Will exist at runtime 
import type { Application, Request, Response } from "express"; // Exists only for typing, hence separate from the previous import statement. Prevents accidental runtime imports that do not actually exist. 

const app:Application = express();   


app.get("/", (req:Request, res:Response)=>{
    res.send("Server is ready123");
});


app.listen(5000, () =>{ 
    console.log("Server started at http://localhost:5000") // Once the server has successfully started, run this code
})

