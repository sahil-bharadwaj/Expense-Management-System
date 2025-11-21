const mongoose = require("mongoose");

//schema design
const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
      enum: ["income", "expense"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
    description: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

//export
const expenseModel = mongoose.model("expenses", expenseSchema);
module.exports = expenseModel;
