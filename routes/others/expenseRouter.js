const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addExpense,
  getExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  deleteExpenses
} = require("../../controller/others/ExpenseController");

router.post(
  "/add",
  addExpense
);
router.get(
  "/",
  getExpenses
);

router.get(
    '/:dataId',
    getExpense
)

router.put(
    "/:dataId",
    updateExpense
);

router.delete(
    "/:dataId",
    deleteExpense
);

router.delete(
    '/',
    deleteExpenses
)

module.exports = router;
