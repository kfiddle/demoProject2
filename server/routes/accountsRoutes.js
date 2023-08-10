const express = require("express");
const router = express.Router();

const accountsController = require("../controllers/accountsController");

router.get("/", accountsController, (req, res, next) => {
  res.status(201).json({ accounts: res.locals.accounts });
});

module.exports = router;
