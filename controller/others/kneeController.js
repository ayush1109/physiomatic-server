const Knee = require('../../models/others/knee');

exports.addKnee = async(req, res) => {
    Knee.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getKnees = async(req, res) => {
    Knee.find()
    .then((datas) => {
        res.json(datas)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateKnee = async(req, res) => {
    Knee.findByIdAndUpdate(req.params.dataId, {
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

exports.deleteKnee = async (req, res) => {
    Knee.findByIdAndRemove(req.params.dataId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteKnees = async (req, res) => {
    Knee.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getKnee = async(req, res) => {
    Knee.findById(req.params.dataId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



