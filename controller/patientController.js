const Patient = require("../models/Patient");

exports.addPatient = (req, res) => {
  const patientData = { ...req.body };

  patientData.user = req.user._id;
  const dmy = req.body.dob.split("/");
  const d = dmy[0];
  const m = dmy[1] - 1;
  const y = dmy[2];
  patientData.dob = new Date(y, m, d);
  const offset = patientData.dob.getTimezoneOffset();
  const hour = Math.floor(Math.abs(offset) / 60);
  const min = Math.abs(offset) % 60;
  if (offset < 0) {
    patientData.dob = new Date(y, m, d, hour, min);
  } else patientData.dob(y, m, d, -hours, -min);
  const newPatient = new Patient(patientData);
  newPatient
    .save()
    .then((patient) => {
      res.json(patient);
    })
    .catch((err) => {
      return res.status(400).json({ message: "cant add patient", err });
    });
};

exports.getPatient = (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then((patient) => {
      if (patient) {
        return res.json(patient);
      }
      return res.status(400).json({ message: "Not found" });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong" });
    });
};

exports.getAllUserPatients = (req, res) => {
  Patient.find({ user: req.user._id })
    .then((patients) => {
      return res.json({ patients });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
};

exports.deletePatient = (req, res) => {
  console.log("delete call route");
  Patient.findOneAndRemove({ _id: req.params.id })
    .then((patient) => {
      console.log("patient deleted", patient);
      return res.json({ patient });
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went wrong", err });
    });
};
