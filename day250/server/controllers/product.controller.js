const Product = require('../models/product.model');
const { deleteImage } = require('../utils/image');

const uploadProduct = async (req, res) => {
  try {
    const body = req.body;

    const images = req.files.map(file => file.path);

    const result = await imageUpload('Products', images);
    const imageUrls = result.map(img => ({url: img.secure_url, public_id: img.public_id}));

    body.images = imageUrls;

    const newProduct = await Product.create(body);

    res.status(201).json(newProduct);
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.findOne()
    res.status(200).json(products);
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const getProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findById(id)
    res.status(200).json(product)
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    
    if(!updatedProduct) return res.status(404).json({message: 'Product not found'});
    
    res.status(200).json(updatedProduct);
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findByIdAndDelete(id);
    
    const promises = product.images.map(img => deleteImage(img.public_id));
    await Promise.all(promises)
    
    if(!product) return res.status(404).json({message: 'Product not found'});
    
    res.status(200).json({message: 'Product deleted successfully'});
  }catch(err){
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  uploadProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}