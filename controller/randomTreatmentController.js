const RandomTreatment = require('../models/others/randomTreatment');

exports.addRandomTreatment = async(req, res) => {
    RandomTreatment.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getRandomTreatments = async(req, res) => {
    RandomTreatment.find()
    .then((datas) => {
        res.json(datas)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateRandomTreatment = async(req, res) => {
    RandomTreatment.findByIdAndUpdate(req.params.dataId, {
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

exports.deleteRandomTreatment = async (req, res) => {
    RandomTreatment.findByIdAndRemove(req.params.dataId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteRandomTreatments = async (req, res) => {
    RandomTreatment.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getRandomTreatment = async(req, res) => {
    RandomTreatment.findById(req.params.dataId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



