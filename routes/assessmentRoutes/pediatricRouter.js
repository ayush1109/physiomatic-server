const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addPediatric,
  getPediatric,
  getPediatrics,
  updatePediatric,
  deletePediatric,
  deletePediatrics
} = require("../../controller/assessmentController/PediatricController");

router.post(
  "/add",
  addPediatric
);
router.get(
  "/",
  getPediatrics
);

router.get(
    '/:dataId',
    getPediatric
)

router.put(
    "/:dataId",
    updatePediatric
);

router.delete(
    "/:dataId",
    deletePediatric
);

router.delete(
    '/',
    deletePediatrics
)

module.exports = router;
