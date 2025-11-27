import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
    serialNumber:{
        type: String,
        required: true
    },
    holderName:{
        type: String,
        required: true
    },
    cardNumber:{
        type: String,
        required: true
    },
    expirationDate:{
        type: String,
        required: true
    },
    cvv:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    paypal:{
        type: String,
        required: true
    }

})

export default CardSchema