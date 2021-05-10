const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addSensoryExamination,
  getSensoryExamination,
  getSensoryExaminations,
  updateSensoryExamination,
  deleteSensoryExamination,
  deleteSensoryExaminations
} = require("../../controller/assessmentController/sensoryController");

router.post(
  "/add",
  addSensoryExamination
);
router.get(
  "/",
  getSensoryExaminations
);

router.get(
    '/:sensoryId',
    getSensoryExamination
)

router.put(
    "/:sensoryId",
    updateSensoryExamination
);

router.delete(
    "/:sensoryId",
    deleteSensoryExamination
);

router.delete(
    '/',
    deleteSensoryExaminations
)

module.exports = router;
