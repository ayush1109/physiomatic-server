const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addExamination,
  getExaminations,
  getExamination,
  updateExamination,
  deleteExamination,
  deleteExaminations
} = require("../../controller/assessment/examinationController");

router.post(
  "/add",
  addExamination
);
router.get(
  "/",
  getExaminations
);

router.get(
    '/:dataId',
    getExamination
)

router.put(
    "/:dataId",
    updateExamination
);

router.delete(
    "/:dataId",
    deleteExamination
);

router.delete(
    '/',
    deleteExaminations
)

module.exports = router;
