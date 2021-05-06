const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  addPatient,
  getPatient,
  getAllUserPatients,
  deletePatient,
} = require("../controller/patientController");

// router.get("/", (req, res) => {
//   res.json({ msg: "Succesfull" });
// });

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  addPatient
);
router.get(
  "/get/:id",
  passport.authenticate("jwt", { session: false }),
  getPatient
);
router.get(
  "/patients",
  passport.authenticate("jwt", { session: false }),
  getAllUserPatients
);

router.delete("/delete/:id", deletePatient);

module.exports = router;
