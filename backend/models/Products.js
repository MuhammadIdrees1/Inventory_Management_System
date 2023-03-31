const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    stock: {
      type: Number,
    },
    price: { type: Number },
    purchaseHistory: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PurchaseDetails" },
    ],
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
