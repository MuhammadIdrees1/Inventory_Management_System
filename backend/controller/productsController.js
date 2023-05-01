const Products = require("../models/Products");
const PurchaseDetails = require("../models/PurchaseDetails");
const SalesDetails = require("../models/SalesDetails");

// Add New Product
const add_products = async (req, res) => {
  const { userId } = req.params;
  console.log(req.body);
  const { name, description, manufacturer } = req.body;

  try {
    if (!name || !description || !manufacturer) {
      return res.status(400).json({
        message: "Name, description, and manufacturer are required fields",
      });
    }
    const products = new Products({
      userId: userId,
      name: name,
      description: description,
      manufacturer: manufacturer,
      stock: 0,
      price: 0,
    });

    const product = await products.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get All Products
const all_products = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await Products.find({ userId });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};
// Get Single Product
const single_product = async (req, res) => {
  const { productId } = req.params;
  console.log("pro", productId);
  try {
    // get single product with purchase history
    const populatedProduct = await Products.findById({ productId }).populate(
      "purchaseHistory"
    );

    if (!populatedProduct) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(populatedProduct);

    console.log(populatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// update product
const update_products = async (req, res) => {
  console.log(req.params.productId, req.body);
  try {
    const product = await Products.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        manufacturer: req.body.manufacturer,
      },
      { new: true }
    );

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Products
const delete_products = async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const purchase = await PurchaseDetails.deleteOne({
      productId: req.params.id,
    });
    if (!purchase) {
      res.status(404).json({ message: "Product not found" });
    }

    const sales = await SalesDetails.deleteOne({
      productId: req.params.id,
    });
    if (!sales) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  add_products,
  all_products,
  single_product,
  update_products,
  delete_products,
};
