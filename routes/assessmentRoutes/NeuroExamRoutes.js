  
const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addNeuroExam,
  getNeuroExam,
  getNeuroExams,
  updateNeuroExam,
  deleteNeuroExam,
  deleteNeuroExams
} = require("../../controller/assessmentController/neuroExamController");


router.post(
  "/add",
  addNeuroExam
);
router.get(
  "/",
  getNeuroExams
);

router.get(
    '/:neuroId',
    getNeuroExam
)

router.put(
    "/:neuroId",
    updateNeuroExam
);

router.delete(
    "/:neuroId",
    deleteNeuroExam
);

router.delete(
    '/',
    deleteNeuroExams
)

module.exports = router;