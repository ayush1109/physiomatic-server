const express = require("express");
const passport = require("passport");
const router = express.Router();
const {
  addAppointent,
  getAppointmentById,
  getAllAppointments,
  editAppointment,
  deleteAppointment,
} = require("../controller/appointmentController");

router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  addAppointent
);
router.put(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  editAppointment
);
router.get(
  "/appointments",
  passport.authenticate("jwt", { session: false }),
  getAllAppointments
);
router.get(
  "/get/:id",
  passport.authenticate("jwt", { session: false }),
  getAppointmentById
);
router.delete("/delete/:id", deleteAppointment);

module.exports = router;
