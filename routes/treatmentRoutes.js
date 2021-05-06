const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  addTreatment,
  getTreatmentById,
  getTreatments,
} = require("../controller/treatmentController");

// router.get("/", (req, res) => {
//   res.json({ msg: "Succesfull" });
// });

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  addTreatment
);
router.get(
  "/treatments",
  passport.authenticate("jwt", { session: false }),
  getTreatments
);
router.get(
  "/get/:id",
  passport.authenticate("jwt", { session: false }),
  getTreatmentById
);

module.exports = router;
