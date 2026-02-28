const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  image: {
    url: {
      type: String,
      default: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/profile_pictures/default`
    },
    publicId: {
      type: String,
      default: "profile_pictures/default"
    }
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product