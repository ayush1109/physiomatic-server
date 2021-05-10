const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addPain,
  getPains,
  getPain,
  updatePain,
  deletePain,
  deletePains
} = require("../../controller/assessmentController/painController");

router.post(
  "/add",
  addPain
);
router.get(
  "/",
  getPains
);

router.get(
    '/:painId',
    getPain
)

router.put(
    "/:painId",
    updatePain
);

router.delete(
    "/:painId",
    deletePain
);

router.delete(
    '/',
    deletePains
)

module.exports = router;
