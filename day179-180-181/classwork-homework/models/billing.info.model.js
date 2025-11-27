import mongoose from 'mongoose';

const BillingInfoSchema = new mongoose.Schema({
  billingInfo:{
    companyUserId:{
      type: ObjectId(),
      required: true
    },
    companyName:{
      type: String,
      required: true
    },
    companyEmail:{
      type: String,
      required: true
    },
    vatNumber:{
      type: String,
      required: true
    },
  }
})