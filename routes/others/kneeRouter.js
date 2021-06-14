const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addKnee,
  getKnee,
  getKnees,
  updateKnee,
  deleteKnee,
  deleteKnees
} = require("../../controller/others/kneeController");

router.post(
  "/add",
  addKnee
);
router.get(
  "/",
  getKnees
);

router.get(
    '/:dataId',
    getKnee
)

router.put(
    "/:dataId",
    updateKnee
);

router.delete(
    "/:dataId",
    deleteKnee
);

router.delete(
    '/',
    deleteKnees
)

module.exports = router;
