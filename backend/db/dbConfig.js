const mongoose = require("mongoose");

const uri = process.env.DATABASE_URI;

const dataBase = async () => {
  try {
    const x = await mongoose.connect(uri);
    console.log("CONNECTED !!");
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

module.exports = dataBase;
