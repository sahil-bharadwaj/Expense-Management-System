const expenseModel = require("../models/expenseModel");

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const { userId } = req.body;
    const expenses = await expenseModel.find({ userId: userId });
    res.status(200).json({
      success: true,
      expenses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Add expense
const addExpense = async (req, res) => {
  try {
    const newExpense = new expenseModel(req.body);
    await newExpense.save();
    res.status(201).json({
      success: true,
      message: "Expense added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Edit expense
const editExpense = async (req, res) => {
  try {
    await expenseModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// Delete expense
const deleteExpense = async (req, res) => {
  try {
    await expenseModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  getAllExpenses,
  addExpense,
  editExpense,
  deleteExpense,
};
