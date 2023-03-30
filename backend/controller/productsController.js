const Products = require("../models/Products");
// const joi = require("joi");/

// Add New Product
const add_products = async (req, res) => {
  console.log(req.body);
  try {
    // const { error } = validate(req.body);
    // if (error) {
    //   return res.status(400).send({ message: error.details[0].message });
    // }
    const products = new Products({
      name: req.body.name,
      description: req.body.description,
      manufacturer: req.body.manufacturer,
    });

    const product = await products.save();
    res.send(product);
  } catch (error) {
    console.log(error);
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
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching products");
  }
};
// Get Single Product
const single_product = async (req, res) => {
  console.log("pro", req.params.id);
  try {
    const product = await Products.findById(req.params.id);
    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching products");
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
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete Products
const delete_products = async (req, res) => {
  console.log(req.params.id);
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found");
    }
    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

const add_Purchase_Details = async (req, res) => {
  const { productId } = req.params;
  const { date, quantity } = req.body;
  try {
    // Find the product by ID
    const product = await Products.findById(productId);
    console.log(product);

    const newPurchase = {
      product: product._id,
      date: new Date(date),
      quantity: parseInt(quantity),
    };
    console.log(newPurchase);

    // Add the purchase to the product's purchase history
    product.purchaseHistory.push(newPurchase);

    // // Update the product's stock level
    product.stock += newPurchase.quantity.toString();
    // console.log(quantity);
    // Save the updated product to the database
    await product.save();

    // Return the updated product as the response
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

module.exports = {
  add_products,
  all_products,
  single_product,
  update_products,
  delete_products,
  add_Purchase_Details,
};
