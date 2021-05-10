const SensoryExamination = require('../../models/assessmentModel/SensoryExamination');

exports.addSensoryExamination = async(req, res) => {
    SensoryExamination.create(req.body)
    .then((sensory) => {
        res.json(sensory);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getSensoryExaminations = async(req, res) => {
    SensoryExamination.find()
    .then((sensory) => {
        res.json(sensory)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateSensoryExamination = async(req, res) => {
    SensoryExamination.findByIdAndUpdate(req.params.sensoryId, {
        $set: req.body
    }, { new: true })
        .then((sensory) => {
            res.json(sensory);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteSensoryExamination = async (req, res) => {
    SensoryExamination.findByIdAndRemove(req.params.sensoryId)
        .then((sensory) => {
            res.json(sensory);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteSensoryExaminations = async (req, res) => {
    SensoryExamination.remove({})
        .then((sensorys) => {
            res.json(sensorys);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getSensoryExamination = async(req, res) => {
    SensoryExamination.findById(req.params.sensoryId)
    .then((sensory) => {
        res.json(sensory)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



