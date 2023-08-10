const path = require("path");

const express = require("express");

const libraryRoutes = require("./routes/libraryRoutes");
const usersRoutes = require("./routes/usersRoutes");
const accountsRoutes = require("./routes/accountsRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/library", libraryRoutes);
app.use("/accounts", accountsRoutes);
app.use("/users/name", () => console.log("middleware will be here"));

app.use((req, res) => {
  console.log("catch-all hit");
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  // define Default error object
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
