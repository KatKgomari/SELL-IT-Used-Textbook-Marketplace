import mongoose from "mongoose"
import { LISTING_CONDITION } from "../types/listing-condition.types.ts"
import { LISTING_STATUS } from "../types/listing-status.types.ts"

const listingSchema = new  mongoose.Schema({
    seller:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    book:{
        type: mongoose.Schema.ObjectId,
        ref: "Book",
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    condition:{
        type: String,
        enum: LISTING_CONDITION,
        required: true
    },
    status:{
        type: String,
        enum: LISTING_STATUS,
        default: LISTING_STATUS[0]  //Pending
    },
    images:{
        type: Array,
        required: true
    },
    buyer:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false
    }
},{
    timestamps: true
});

// Making the model
const Listing = mongoose.model("Listing", listingSchema);

export default Listing;