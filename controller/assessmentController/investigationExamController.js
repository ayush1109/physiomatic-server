  
const InvestigationExam = require('../../models/assessmentModel/InvestigationExam');

exports.addInvestigationExam = async(req, res) => {
    InvestigationExam.create(req.body)
    .then((investigation) => {
        res.json(investigation);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getInvestigationExams = async(req, res) => {
    InvestigationExam.find()
    .then((investigation) => {
        res.json(investigation)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updateInvestigationExam = async(req, res) => {
    InvestigationExam.findByIdAndUpdate(req.params.investigationId, {
        $set: req.body
    }, { new: true })
        .then((investigation) => {
            res.json(investigation);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteInvestigationExam = async (req, res) => {
    InvestigationExam.findByIdAndRemove(req.params.investigationId)
        .then((investigation) => {
            res.json(investigation);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteInvestigationExams = async (req, res) => {
    InvestigationExam.remove({})
        .then((investigations) => {
            res.json(investigations);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getInvestigationExam = async(req, res) => {
    InvestigationExam.findById(req.params.investigationId)
    .then((investigation) => {
        res.json(investigation)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

