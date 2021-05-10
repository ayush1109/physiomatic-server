const Pain = require('../../models/assessmentModel/Pain');

exports.addPain = async(req, res) => {
    Pain.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getPains = async(req, res) => {
    Pain.find()
    .then((datas) => {
        res.json(datas)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updatePain = async(req, res) => {
    Pain.findByIdAndUpdate(req.params.painId, {
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

exports.deletePain = async (req, res) => {
    Pain.findByIdAndRemove(req.params.painId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deletePains = async (req, res) => {
    Pain.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getPain = async(req, res) => {
    Pain.findById(req.params.painId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



