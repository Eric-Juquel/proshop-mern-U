import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc   Fetch all products
// @route  Get  /api/products
// @acces  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc   Fetch single product
// @route  Get  /api/products/:id
// @acces  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc   Delete a product
// @route  DELETE  /api/products/:id
// @acces  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})
