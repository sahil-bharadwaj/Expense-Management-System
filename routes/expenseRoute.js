const express = require("express");
const {
  getAllExpenses,
  addExpense,
  editExpense,
  deleteExpense,
} = require("../controllers/expenseController");

//router object
const router = express.Router();

//routes
// GET all expenses
router.post("/get-expenses", getAllExpenses);

// POST add expense
router.post("/add-expense", addExpense);

// PUT edit expense
router.put("/edit-expense/:id", editExpense);

// DELETE expense
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
