import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    yourTransaction:{
        companyUserId: mongoose.Schema.Types.ObjectId,
        ref: "Clerk",
        companyName:{
            type: String,
            required: true
        },
        creationDate:{
            type: Date(),
            required: true
        },
        updateDate:{
            type: Date(),
            required: true
        },
        price:{
            type: Number,
            required: true
        },
    }
})