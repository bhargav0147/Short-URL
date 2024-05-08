const shortidGenerator = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "URL is required" });
  const shortid = shortidGenerator.generate();
  await URL.create({
    shortId: shortid,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortid });
}

async function handleGetUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  if (!entry) return res.status(404).json({ message: "URL not found" });
  return res.redirect(entry.redirectURL);
}

async function handleGetAnalystic(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if (!result) return res.status(404).json({ message: "URL not found" });

  return res.json({
    totalClick: result.visitHistory.length,
    analystic: result.visitHistory,
  });
}
module.exports = {
  handleGenerateNewShortURL,
  handleGetUrl,
  handleGetAnalystic
};
