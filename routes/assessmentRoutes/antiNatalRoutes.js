const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addAntiNatal,
  getAntiNatals,
  getAntiNatal,
  updateAntiNatal,
  deleteAntiNatal,
  deleteAntiNatals
} = require("../../controller/assessmentController/antiNatalController");

router.post(
   "/add",
   addAntiNatal
);
router.get(
  "/",
  getAntiNatals
);

router.get(
    '/:antiId',
    getAntiNatal
)

router.put(
    "/:antiId",
    updateAntiNatal
);

router.delete(
    "/:antiId",
    deleteAntiNatal
);

router.delete(
    '/',
    deleteAntiNatals
)

module.exports = router;