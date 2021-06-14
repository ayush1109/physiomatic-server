  
const Staff = require('../../models/others/staff');

exports.addStaff = async(req, res) => {
    Staff.create(req.body)
    .then((staff) => {
        res.json(staff);
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.getStaffs = async(req, res) => {
    Staff.find()
    .then((staff) => {
        res.json(staff)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: " Some problem occured", error: err });
      });
}

exports.updateStaff = async(req, res) => {
    Staff.findByIdAndUpdate(req.params.staffId, {
        $set: req.body
    }, { new: true })
        .then((staff) => {
            res.json(staff);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.deleteStaff = async (req, res) => {
    Staff.findByIdAndRemove(req.params.staffId)
        .then((staff) => {
            res.json(staff);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}


exports.deleteStaffs = async (req, res) => {
    Staff.remove({})
        .then((staffs) => {
            res.json(staffs);
        })
        .catch((err) => {
            return res
              .status(400)
              .json({ message: "Some problem occured", error: err });
          });
}

exports.getStaff = async(req, res) => {
    Staff.findById(req.params.staffId)
    .then((staff) => {
        res.json(staff)
    })
    .catch((err) => {
        return res
          .status(400)
          .json({ message: "Some problem occured", error: err });
      });
}

