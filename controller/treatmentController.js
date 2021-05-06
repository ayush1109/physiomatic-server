const Treatment = require("../models/Treatment");
exports.addTreatment = (req, res) => {
  const treatmentData = { ...req.body };
  treatmentData.user = req.user._id;
  const newTreatment = new Treatment(treatmentData);
  newTreatment
    .save()
    .then((treatment) => {
      res.json(treatment);
    })
    .catch((err) => {
      return res.status(400).json({ message: "Something went worng", err });
    });
};

exports.getTreatmentById = (req, res) => {
  const id = req.params.id;
  Treatment.findOne({ _id: id })
    .then((treatment) => {
      if (treatment) return res.json(treatment);
      return res.status(400).json({ user: "User Not Found" });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: "Something went wrong", error: err });
    });
};

exports.getTreatments = (req, res) => {
  Treatment.find({ user: req.user._id })
    .then((treatments) => {
      res.json({ treatments });
    })
    .catch((err) => {
      return res
        .status(400)
        .json({ message: "Something wrong has occured", err });
    });
};
