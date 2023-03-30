// const mongoose = require("mongoose");
// // const jwt = require("jsonwebtoken");
// // const joi = require("joi");
// // const passwordComplexity = require("joi-password-complexity");

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// // UserSchema.methods.generateAuthToken = () => {
// //   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
// //     expiresIn: "7d",
// //   });
// //   return token;
// // };

// // const validate = (data) => {
// //   const schema = joi.object({
// //     username: joi.string().required().label("userName"),
// //     email: joi.string().required().label("email"),
// //     password: passwordComplexity().required().label("password"),
// //   });
// //   return schema.validate(data);
// // };

// const User = mongoose.model("users", UserSchema);

// module.exports = { User };

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
