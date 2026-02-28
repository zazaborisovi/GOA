const { uploadProduct, getProduct, getProducts, deleteProduct, updateProduct } = require('../controllers/product.controller');
const { protect, allowedTo } = require('../middleware/auth.middleware');

const productRouter = require('express').Router();

productRouter.post("/", protect, allowedTo('admin'), uploadProduct)
productRouter.get("/", getProducts)
productRouter.get("/:id", getProduct)
productRouter.put("/:id", protect, allowedTo('admin'), updateProduct)
productRouter.delete("/:id", protect, allowedTo('admin'), deleteProduct)

module.exports = productRouter;