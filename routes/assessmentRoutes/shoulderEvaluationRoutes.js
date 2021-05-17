const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addShoulderEvaluation,
  getShoulderEvaluations,
  getShoulderEvaluation,
  updateShoulderEvaluation,
  deleteShoulderEvaluation,
  deleteShoulderEvaluations
} = require("../../controller/assessmentController/shoulderEvaluationController");

router.post(
  "/add",
  addShoulderEvaluation
);
router.get(
  "/",
  getShoulderEvaluations
);

router.get(
    '/:dataId',
    getShoulderEvaluation
)

router.put(
    "/:dataId",
    updateShoulderEvaluation
);

router.delete(
    "/:dataId",
    deleteShoulderEvaluation
);

router.delete(
    '/',
    deleteShoulderEvaluations
)

module.exports = router;
