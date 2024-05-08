const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetUrl,
  handleGetAnalystic
} = require("../controller/url");
const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleGetUrl);
router.get("/analytic/:shortId",handleGetAnalystic);
module.exports = router;
