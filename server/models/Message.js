const mongoose = require("mongoose");
const validator = require("validator");

const MessageSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isLength(value, { min: 2, max: 20 })) {
          throw new Error("Must be between 2 and 20 characters");
        }
      }
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 20
    },
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      }
    },
    subject: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 200
    },
    message: {
      type: String,
      required: true,
      minlength: 50,
      maxlength: 5000
    }
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model("messages", MessageSchema);

module.exports = Message;
