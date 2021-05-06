const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  addFeedback,
  getAllFeedback,
} = require("../controller/feedbackController");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  addFeedback
);
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllFeedback
);

module.exports = router;
