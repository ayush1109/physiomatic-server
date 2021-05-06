const jwt = require("jsonwebtoken");

exports.genToken = (data) => {
  // console.log(data);
  const token = jwt.sign(data, process.env.secretOrPrivateKey, {
    expiresIn: "7 days",
  });
  return token;
};
