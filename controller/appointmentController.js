const { getDate } = require("../helpers/getDate");

const Appointment = require("../models/Appointment");

exports.addAppointent = async (req, res) => {
  console.log(req.body);
  console.log("inside addappointment");

  const date = req.body.date;
  const start = req.body.start;
  const end = req.body.end;
  const allDay = req.body.allDay;
  const title = req.body.title;
  const notes = req.body.notes;
  const formData = req.body.formData;
  const patient = req.body.patient._id;
  const consultant = req.body.consultant;
  const treatment = formData.treatment._id;

  const appointmentData = {
    date,
    start,
    end,
    allDay,
    title,
    notes,
    formData,
    treatment,
    consultant,
    patient,
    user: req.user._id,
  };
  const newAppointment = new Appointment(appointmentData);
  newAppointment
    .save()
    .then((appointment) => {
      res.json(appointment);
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: "Some problem occured", error: err });
    });
};

exports.getAppointmentById = (req, res) => {
  const id = req.params.id;
  try {
    Appointment.findOne({ _id: id })
      .populate("treatment", ["name"])
      .populate("patient", ["firstName", "lastName"]) //patient is the fieldName in appointment which is patient if it was patientId then we have to write patientId
      .exec((err, appointment) => {
        if (err)
          return res.status(400).json({ message: "somethingwnet wrong", err });
        // console.log("Populated appointment ", appointment);
        if (appointment) return res.json(appointment);
        return res.status(400).json({ message: "not found" });
      });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Some problem occured", error: err });
  }
};

exports.getAllAppointments = (req, res) => {
  Appointment.find({ user: req.user._id })
    .populate('patient')
    .then((appointments) => {
      res.json({ appointments });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
};

exports.editStatus = async (req, res) => {
  Appointment.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true })
    .then((appointment) => {
      return res.json({ appointment });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
}

exports.editAppointment = async (req, res) => {
  Appointment.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true })
    .then((appointment) => {
      return res.json({ appointment });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
};

exports.deleteAppointment = (req, res) => {
  console.log("delete called");
  Appointment.findOneAndRemove({ _id: req.params.id })
    .then((appointment) => {
      console.log('done')
      return res.json({ appointment });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
};
