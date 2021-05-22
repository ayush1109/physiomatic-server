  
const NeuroExam = require('../../models/assessmentModel/NeuroExam');

exports.addNeuroExam = async(req, res) => {
    NeuroExam.create(req.body)
    .then((neuro) => {
        res.json(neuro);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getNeuroExams = async(req, res) => {
    NeuroExam.find()
    .then((neuro) => {
        res.json(neuro)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updateNeuroExam = async(req, res) => {
    NeuroExam.findByIdAndUpdate(req.params.neuroId, {
        $set: req.body
    }, { new: true })
        .then((neuro) => {
            res.json(neuro);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteNeuroExam = async (req, res) => {
    NeuroExam.findByIdAndRemove(req.params.neuroId)
        .then((neuro) => {
            res.json(neuro);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteNeuroExams = async (req, res) => {
    NeuroExam.remove({})
        .then((neuros) => {
            res.json(neuros);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getNeuroExam = async(req, res) => {
    NeuroExam.findById(req.params.neuroId)
    .then((neuro) => {
        res.json(neuro)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

