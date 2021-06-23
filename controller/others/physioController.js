const Physio = require('../../models/others/Physio');

exports.addPhysio = async(req, res) => {
    Physio.create(req.body)
    .then((physio) => {
        res.json(physio);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getPhysios = async(req, res) => {
    Physio.find()
    .then((physio) => {
        res.json(physio)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updatePhysio = async(req, res) => {
    Physio.findByIdAndUpdate(req.params.physioId, {
        $set: req.body
    }, { new: true })
        .then((physio) => {
            res.json(physio);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deletePhysio = async (req, res) => {
    Physio.findByIdAndRemove(req.params.physioId)
        .then((physio) => {
            res.json(physio);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deletePhysios = async (req, res) => {
    Physio.remove({})
        .then((physios) => {
            res.json(physios);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getPhysio = async(req, res) => {
    Physio.findById(req.params.physioId)
    .then((physio) => {
        res.json(physio)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}