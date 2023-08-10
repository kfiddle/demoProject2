const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get("/", usersController, (req, res, next) => {
  res.status(201).json({ users: res.locals.users });
});

router.get("/:uid", usersController, (req, res, next) => {
  res.status(201).json({ users: res.locals.user });
});

router.post("/", usersController.newUser, (req, res, next) => {
  res.status(201).json({ user: res.locals.newUser });
});

module.exports = router;
