const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { gsheets } = require("../config/googleSheets");
const { genToken } = require("../helpers/genToken");
exports.register = (req, res) => {
  const userData = { ...req.body };
  // console.log(userData);
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(userData.password, salt, (err, hash) => {
      if (err) throw err;
      userData.password = hash;
      const newUser = new User(userData);
      newUser.save().then((user) => {
        // console.log(process.env.client_id);
        const sheetRow = [
          user._id,
          user.name,
          user.email,
          user.mobile,
          user.clinicName,
          new Date(user.date).toDateString(),
        ];
        gsheets(sheetRow);
        user.password = undefined;
        const token = genToken(user);
        res.json(token);
      });
    });
  });
};

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        const isMatch = bcrypt.compareSync(password, user.password);
        if (isMatch) {
          user.password = undefined;

          const token = genToken(user.toObject());

          return res.json(token);
        } else return res.status(400).json({ message: "Authorization failed" });
      }
      return res.status(400).json({ message: "user not found" });
    })
    .catch((err) => {
      return res.status(400).json({ message: "something wrong occured", err });
    });
};

exports.authenticateUser = (req, res) => {
  // console.log("authenticated");
  const user = req.user;
  user.password = undefined;
  const token = genToken(user.toObject());

  return res.json(token);
};
