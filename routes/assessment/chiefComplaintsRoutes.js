const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addChiefComplaint,
  getChiefComplaints,
  getChiefComplaint,
  updateChiefComplaint,
  deleteChiefComplaint,
  deleteChiefComplaints
} = require("../controller/chiefComplaintsController");

router.post(
  "/add",
  addChiefComplaint
);
router.get(
  "/",
  getChiefComplaints
);

router.get(
    '/:complaintId',
    getChiefComplaint
)

router.put(
    "/:complaintId",
    updateChiefComplaint
);

router.delete(
    "/:complaintId",
    deleteChiefComplaint
);

router.delete(
    '/',
    deleteChiefComplaints
)

module.exports = router;
