require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connection = require("./db/dbConfig");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const storeRoutes = require("./routes/store");
const purchaseRoutes = require("./routes/purchase");
const salesRoutes = require("./routes/sales");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/sales", salesRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}..`);
});
