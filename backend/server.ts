import express from "express"; 
import type { Application, Request, Response } from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.ts";
import Book from "./models/book.model.ts";
import type { responseEncoding } from "axios";



dotenv.config(); // looded into process.env so it can be accessed from anywhere. And it is best that it is here because the server file is the entry way so the environment variables are loaded first thing. 

const app:Application = express();   
  
app.use(express.json()) // Middleware that allows to parse req.body. Allows to go from json to object seamlessly

// CORS Headers: Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post("/api/books", async(req:Request, res:Response)=>{
    const book = req.body; // data sent by user 
    if(!book?.ISBN || !book?.title || !book?.authors || !book?.description){
        return res.status(400).json({success: false, message: "Please provide all fields."});
    }
    
    const authorsArray: Array<String> = book.authors.split(",")
    const newBook =  new Book({...book, authors: authorsArray}); 

    try{ 
        const bookExists = await Book.findOne({ISBN: newBook.ISBN});
        if(!bookExists){
            await newBook.save();
        }
        res.status(201).json({success:true, data: newBook }); // Created succesfully
    }catch(error){
        if(error instanceof Error){
            console.error("Error in creating book ", error.message);
        }
        else{
            console.error("Error in creating book ", error);
        }
        res.status(500).json({success:false, message: "Server Error"}); // Internal Server Error
    }
});

app.post("/api/listing", async (req:Request, res:Response) =>{
    console.log('here! ON THE SERVER!')
    
})

app.listen(5000, () =>{ 
    connectDB();
    console.log("Server started at http://localhost:5000") // Once the server has successfully started, run this code
})