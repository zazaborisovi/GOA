const cloudinary = require("../config/cloudinary.js");
const fs = require('fs');

const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    resource_type: "image",
    quality: "auto",
    format: "webp",
    transformation: [
        { width: 500, height: 500, crop: "fit", gravity: "center" }
    ]
}

const uploadImage = async (folder, files) => {
    try {
      const uploadPromise = files.map(file => cloudinary.uploader.upload(file, { ...options, folder }))

        const result = await Promise.all(uploadPromise)
        
        console.log(result)
        return result;
    } catch(err) {
      return { message: `Error while uploading image ${err.message}`}
    }
}

module.exports = imageUpload