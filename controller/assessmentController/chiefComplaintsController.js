const ChiefComplaints = require('../models/assessment/ChiefComplaints');

exports.addChiefComplaint = async(req, res) => {
    ChiefComplaints.create(req.body)
    .then((complaint) => {
        res.json(complaint);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getChiefComplaints = async(req, res) => {
    ChiefComplaints.find()
    .then((complaints) => {
        res.json(complaints)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateChiefComplaint = async(req, res) => {
    ChiefComplaints.findByIdAndUpdate(req.params.complaintId, {
        $set: req.body
    }, { new: true })
        .then((complaint) => {
            res.json(complaint);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteChiefComplaint = async (req, res) => {
    ChiefComplaints.findByIdAndRemove(req.params.complaintId)
        .then((complaint) => {
            res.json(complaint);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteChiefComplaints = async (req, res) => {
    ChiefComplaints.remove({})
        .then((complaints) => {
            res.json(complaints);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getChiefComplaint = async(req, res) => {
    ChiefComplaints.findById(req.params.complaintId)
    .then((complaint) => {
        res.json(complaint)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



