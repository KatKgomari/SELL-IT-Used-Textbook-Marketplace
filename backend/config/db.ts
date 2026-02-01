import mongoose from "mongoose";
import type {} from "mongoose"


// To configure the connection to the database
export const connectDB = async () =>{
    try{
        const mongoUri = process.env.MONGO_URI;
        if(!mongoUri){
            throw new Error("The MONGO_URI environment variable is missing.");
        }
        else{
            const conn = await mongoose.connect(mongoUri);
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
    }catch(error: unknown){
        if(error instanceof Error){
            console.error(`Error: ${error.message}`) 
        }
        else{
            console.error("Unknown error: ", error);
        }
        process.exit(1); 
    }
}