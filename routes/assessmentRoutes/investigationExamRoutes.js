const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addInvestigationExam,
  getInvestigationExams,
  getInvestigationExam,
  updateInvestigationExam,
  deleteInvestigationExam,
  deleteInvestigationExams
} = require("../../controller/assessmentController/investigationExamController");

router.post(
   "/add",
   addInvestigationExam
);
router.get(
  "/",
  getInvestigationExams
);

router.get(
    '/:investigationId',
    getInvestigationExam
)

router.put(
    "/:investigationId",
    updateInvestigationExam
);

router.delete(
    "/:investigationId",
    deleteInvestigationExam
);

router.delete(
    '/',
    deleteInvestigationExams
)

module.exports = router;