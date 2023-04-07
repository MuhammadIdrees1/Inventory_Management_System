const mongoose = require("mongoose");

const SalesDetailsSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    userId: { type: String, required: true },

    productName: {
      type: String,
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stores",
    },
    storeName: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const SalesDetails = mongoose.model("SalesDetails", SalesDetailsSchema);
module.exports = SalesDetails;
