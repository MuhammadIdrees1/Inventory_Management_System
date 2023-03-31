require("dotenv").config();
const express = require("express");
const connection = require("./db/dbConfig");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const productsRoutes = require("./routes/products");
const storeRoutes = require("./routes/store");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/stores", storeRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}..`);
});
