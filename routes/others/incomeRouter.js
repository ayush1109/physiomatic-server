const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addIncome,
  getIncome,
  getIncomes,
  updateIncome,
  deleteIncome,
  deleteIncomes
} = require("../../controller/others/IncomeController");

router.post(
  "/add",
  addIncome
);
router.get(
  "/",
  getIncomes
);

router.get(
    '/:dataId',
    getIncome
)

router.put(
    "/:dataId",
    updateIncome
);

router.delete(
    "/:dataId",
    deleteIncome
);

router.delete(
    '/',
    deleteIncomes
)

module.exports = router;
