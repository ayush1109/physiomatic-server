const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  addPatient,
  getPatient,
  getAllUserPatients,
  editPatient,
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

router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  editPatient
)

router.delete("/delete/:id", deletePatient);

module.exports = router;
