import mongoose from "mongoose";
import fakeCard from "./card.info.model"

const UserCardAndPayments = new mongoose.Schema({
    clerk_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clerk',
        required: true
    },
    card:{
        type: [fakeCard[objectID()]],
        required: true
    }
})