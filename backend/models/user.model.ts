import mongoose from "mongoose"
import { ROLE } from "../types/roles.types.ts";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    mobile_number:{
        type: String,
        required: true,
        match: /^[0-9]{10,15}$/ // adjust length as needed
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex for email
    },
    password_hash:{ // Return to this once proof of concept is done
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ROLE,
        default: ROLE[0]
    }
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;