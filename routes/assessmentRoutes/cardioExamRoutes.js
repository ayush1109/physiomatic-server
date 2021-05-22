const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addCardioExam,
  getCardioExams,
  getCardioExam,
  updateCardioExam,
  deleteCardioExam,
  deleteCardioExams
} = require("../../controller/assessmentController/cardioExamController");

router.post(
   "/add",
   addCardioExam
);
router.get(
  "/",
  getCardioExams
);

router.get(
    '/:cardioId',
    getCardioExam
)

router.put(
    "/:cardioId",
    updateCardioExam
);

router.delete(
    "/:cardioId",
    deleteCardioExam
);

router.delete(
    '/',
    deleteCardioExams
)

module.exports = router;