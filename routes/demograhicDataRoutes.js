const express = require("express");
const router = express.Router();
//const passport = require("passport");

const {
  addDemographicData,
  getDemographicData,
  getDemographicDatas,
  updateDemographicData,
  deleteDemographicData,
  deleteDemographicDatas
} = require("../controller/demographicDataController");

router.post(
  "/add",
  addDemographicData
);
router.get(
  "/",
  getDemographicDatas
);

router.get(
    '/:dataId',
    getDemographicData
)

router.put(
    "/:dataId",
    updateDemographicData
);

router.delete(
    "/:dataId",
    deleteDemographicData
);

router.delete(
    '/',
    deleteDemographicDatas
)

module.exports = router;
