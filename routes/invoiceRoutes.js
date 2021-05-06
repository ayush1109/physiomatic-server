const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  addInvoice,
  getInvoicesByPatientID,
} = require("../controller/invoiceController");

router.post(
  "/addInvoice",
  passport.authenticate("jwt", { session: false }),
  addInvoice
);

router.get(
  "/patient/:patientId",
  passport.authenticate("jwt", { session: false }),
  getInvoicesByPatientID
);

module.exports = router;
