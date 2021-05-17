const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addMotorExamination,
  getMotorExaminations,
  getMotorExamination,
  updateMotorExamination,
  deleteMotorExamination,
  deleteMotorExaminations
} = require("../../controller/assessmentController/motorExaminationController");

router.post(
  "/add",
  addMotorExamination
);
router.get(
  "/",
  getMotorExaminations
);

router.get(
    '/:motorId',
    getMotorExamination
)

router.put(
    "/:motorId",
    updateMotorExamination
);

router.delete(
    "/:motorId",
    deleteMotorExamination
);

router.delete(
    '/',
    deleteMotorExaminations
)

module.exports = router;
