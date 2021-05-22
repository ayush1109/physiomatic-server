  
const CardioExam = require('../../models/assessmentModel/CardioExam');

exports.addCardioExam = async(req, res) => {
    CardioExam.create(req.body)
    .then((cardio) => {
        res.json(cardio);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getCardioExams = async(req, res) => {
    CardioExam.find()
    .then((cardio) => {
        res.json(cardio)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updateCardioExam = async(req, res) => {
    CardioExam.findByIdAndUpdate(req.params.cardioId, {
        $set: req.body
    }, { new: true })
        .then((cardio) => {
            res.json(cardio);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteCardioExam = async (req, res) => {
    CardioExam.findByIdAndRemove(req.params.cardioId)
        .then((cardio) => {
            res.json(cardio);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteCardioExams = async (req, res) => {
    CardioExam.remove({})
        .then((cardios) => {
            res.json(cardios);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getCardioExam = async(req, res) => {
    CardioExam.findById(req.params.cardioId)
    .then((cardio) => {
        res.json(cardio)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

