const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addStaff,
  getStaffs,
  getStaff,
  updateStaff,
  deleteStaff,
  deleteStaffs
} = require("../../controller/others/staffController");

router.post(
   "/add",
   addStaff
);
router.get(
  "/",
  getStaffs
);

router.get(
    '/:staffId',
    getStaff
)

router.put(
    "/edit/:staffId",
    updateStaff
);

router.delete(
    "/delete/:staffId",
    deleteStaff
);

router.delete(
    '/',
    deleteStaffs
)

module.exports = router;