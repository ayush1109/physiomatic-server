const MotorExamination = require('../../models/assessmentModel/MotorExamination');

exports.addMotorExamination = async(req, res) => {
    MotorExamination.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getMotorExaminations = async(req, res) => {
    MotorExamination.find()
    .then((datas) => {
        res.json(datas)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateMotorExamination = async(req, res) => {
    MotorExamination.findByIdAndUpdate(req.params.motorId, {
        $set: req.body
    }, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteMotorExamination = async (req, res) => {
    MotorExamination.findByIdAndRemove(req.params.motorId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteMotorExaminations = async (req, res) => {
    MotorExamination.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getMotorExamination = async(req, res) => {
    MotorExamination.findById(req.params.motorId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



