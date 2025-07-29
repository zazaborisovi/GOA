import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    clerk_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    invoiceId:{
        type: invoiceID(),
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    creationDate:{
        type: Date(),
        required: true
    },
    updateDate:{
        type: Date(),
        required: true
    }
})