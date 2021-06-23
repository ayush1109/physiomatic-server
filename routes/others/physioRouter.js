const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addPhysio,
  getPhysios,
  getPhysio,
  updatePhysio,
  deletePhysio,
  deletePhysios
} = require("../../controller/others/physioController");

router.post(
   "/add",
   addPhysio
);
router.get(
  "/",
  getPhysios
);

router.get(
    '/:physioId',
    getPhysio
)

router.put(
    "/edit/:physioId",
    updatePhysio
);

router.delete(
    "/delete/:physioId",
    deletePhysio
);

router.delete(
    '/',
    deletePhysios
)

module.exports = router;