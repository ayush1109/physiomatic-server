const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addRandomTreatment,
  getRandomTreatment,
  getRandomTreatments,
  updateRandomTreatment,
  deleteRandomTreatment,
  deleteRandomTreatments
} = require("../../controller/randomTreatmentController");

router.post(
  "/add",
  addRandomTreatment
);
router.get(
  "/",
  getRandomTreatments
);

router.get(
    '/:dataId',
    getRandomTreatment
)

router.put(
    "/:dataId",
    updateRandomTreatment
);

router.delete(
    "/:dataId",
    deleteRandomTreatment
);

router.delete(
    '/',
    deleteRandomTreatments
)

module.exports = router;
