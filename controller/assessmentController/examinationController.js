const Examination = require('../../models/assessmentModel/Examination');

exports.addExamination = async(req, res) => {
    Examination.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getExaminations = async(req, res) => {
    Examination.find()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateExamination = async(req, res) => {
    Examination.findByIdAndUpdate(req.params.dataId, {
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

exports.deleteExamination = async (req, res) => {
    Examination.findByIdAndRemove(req.params.dataId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteExaminations = async (req, res) => {
    Examination.remove({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getExamination = async(req, res) => {
    Examination.findById(req.params.dataId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



