const Products = require("../models/Products");
const PurchaseDetails = require("../models/PurchaseDetails");

// Add New Product
const add_products = async (req, res) => {
  console.log(req.body);
  const { name, description, manufacturer } = req.body;

  try {
    if (!name || !description || !manufacturer) {
      return res.status(400).json({
        message: "Name, description, and manufacturer are required fields",
      });
    }
    const products = new Products({
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

// const validate = () => {
//   const schema = joi.object({
//     title: joi.string().email().required().label("title"),
//     manufacturer: joi.string().required().label("manufacturer"),
//     description: joi.string().required().label("description"),
//   });
//   return schema.validate(data);
// };

// Get All Products
const all_products = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching products" });
  }
};
// Get Single Product
const single_product = async (req, res) => {
  console.log("pro", req.params.id);
  try {
    // get single product with purchase history
    const populatedProduct = await Products.findById(req.params.id).populate(
      "purchaseHistory"
    );

    if (!populatedProduct) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(populatedProduct);
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
