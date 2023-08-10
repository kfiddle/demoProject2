const express = require("express");
const router = express.Router();

const libraryController = require("../controllers/coolStuffController");

router.get("/", libraryController, (req, res, next) => {
  res.status(201).json({ devs: res.locals.library });
});

module.exports = router;
