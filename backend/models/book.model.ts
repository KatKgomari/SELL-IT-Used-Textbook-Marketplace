import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    ISBN:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    authors:{
        type: Array<String>,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: Array<String>,
        required: false 
    }
},{
    timestamps: true //createdAt and updatedAt
});

// Book Model (books)
const Book = mongoose.model("Book", bookSchema); //Create a collection called Book that has the schema as detailed above 
  
export default Book; 