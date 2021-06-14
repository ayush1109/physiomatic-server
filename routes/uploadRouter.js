const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const User = require('../models/User');
const passport = require('passport');
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       console.log(req.user._id, 'line 7');
       cb(null, 'public/images');
   },
   
    filename: (req, file, cb) => {
        cb(null, req.user._id.toString() + '.jpg');
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    cb(null, true);
}

const upload = multer({storage: storage, fileFilter: imageFileFilter});

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter.route('/')

.post(passport.authenticate("jwt", { session: false }), upload.single('avatar'), (req, res) => {
    const user = req.user;
    user.image = `images/${req.user._id}.jpg`;
    user.save().then((user) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({file: req.file, user: user});
    })
})


module.exports = uploadRouter;