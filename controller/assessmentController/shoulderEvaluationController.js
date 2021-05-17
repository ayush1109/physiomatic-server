const ShoulderEvaluation = require('../../models/assessmentModel/ShoulderEvaluation');

exports.addShoulderEvaluation = async(req, res) => {
    ShoulderEvaluation.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getShoulderEvaluations = async(req, res) => {
    ShoulderEvaluation.find()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateShoulderEvaluation = async(req, res) => {
    ShoulderEvaluation.findByIdAndUpdate(req.params.dataId, {
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

exports.deleteShoulderEvaluation = async (req, res) => {
    ShoulderEvaluation.findByIdAndRemove(req.params.dataId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteShoulderEvaluations = async (req, res) => {
    ShoulderEvaluation.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getShoulderEvaluation = async(req, res) => {
    ShoulderEvaluation.findById(req.params.dataId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



