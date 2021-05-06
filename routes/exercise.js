const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  addExercise,
  getAllExercises,
  getById,
} = require("../controller/exerciseController");

// router.get("/add", addExercise);

router.get("/getAll", getAllExercises);

router.get("/get/:id", getById);

module.exports = router;
