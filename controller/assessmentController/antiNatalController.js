  
const AntiNatal = require('../../models/assessmentModel/AntiNatal');

exports.addAntiNatal = async(req, res) => {
    AntiNatal.create(req.body)
    .then((anti) => {
        res.json(anti);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getAntiNatals = async(req, res) => {
    AntiNatal.find()
    .then((anti) => {
        res.json(anti)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updateAntiNatal = async(req, res) => {
    AntiNatal.findByIdAndUpdate(req.params.antiId, {
        $set: req.body
    }, { new: true })
        .then((anti) => {
            res.json(anti);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteAntiNatal = async (req, res) => {
    AntiNatal.findByIdAndRemove(req.params.antiId)
        .then((anti) => {
            res.json(anti);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteAntiNatals = async (req, res) => {
    AntiNatal.remove({})
        .then((antis) => {
            res.json(antis);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getAntiNatal = async(req, res) => {
    AntiNatal.findById(req.params.antiId)
    .then((anti) => {
        res.json(anti)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

