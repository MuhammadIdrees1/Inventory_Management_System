const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    stock: {
      type: String,
    },
    purchaseHistory: [purchaseSchema],
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
