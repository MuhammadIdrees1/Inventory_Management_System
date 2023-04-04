const Products = require("../models/Products");
const SalesDetails = require("../models/SalesDetails");

// add Sales details
const add_Sales_Details = async (req, res) => {
  const { productId } = req.params;
  const { date, price, quantity } = req.body;
  try {
    // Find the product by ID
    const product = await Products.findById(productId);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const newSale = new SalesDetails({
      product: product._id,
      date: date,
      price: price,
      quantity: quantity,
    });

    const Sales_Details = await newSale.save();
    console.log(typeof quantity);
    console.log(typeof product.stock);

    // product.stock = 0;
    product.stock -= quantity;
    // product.price = 0;
    product.price -= price;

    // product.purchaseHistory.push(Purchase_Details._id);
    await product.save();
    res.status(201).json({
      message: "Purchase details added successfully",
      Sales_Details,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
};

// Get All Sales details
const all_Sales_details = async (req, res) => {
  try {
    const sales_details = await SalesDetails.find();
    res.status(200).json(sales_details);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching details" });
  }
};

module.exports = {
  add_Sales_Details,
  all_Sales_details,
};
