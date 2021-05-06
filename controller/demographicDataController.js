const DemographicData = require('../models/DemographicData');

exports.addDemographicData = async(req, res) => {
    DemographicData.create(req.body)
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.getDemographicDatas = async(req, res) => {
    DemographicData.find()
    .then((datas) => {
        res.json(datas)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

exports.updateDemographicData = async(req, res) => {
    DemographicData.findByIdAndUpdate(req.params.dataId, {
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

exports.deleteDemographicData = async (req, res) => {
    DemographicData.findByIdAndRemove(req.params.dataId)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteDemographicDatas = async (req, res) => {
    DemographicData.remove({})
        .then((datas) => {
            res.json(datas);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getDemographicData = async(req, res) => {
    DemographicData.findById(req.params.dataId)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}



