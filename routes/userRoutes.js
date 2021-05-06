const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  register,
  login,
  authenticateUser,
} = require("../controller/userController");

router.get("/", (req, res) => {
  res.json({ msg: "Succesfull" });
});

router.post("/register", register);
router.post("/login", login);
router.get(
  "/authenticate",
  passport.authenticate("jwt", { session: false }),
  authenticateUser
);

module.exports = router;
