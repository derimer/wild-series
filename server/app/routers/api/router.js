const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const sayWelcome = (req, res) => {
  res.send("Welcome to Wild Series et bravo enfin ,c'était pas trop tot !");
};

router.get("/", sayWelcome);
const itemsRouter = require("./items/router");
const programsRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
/* ************************************************************************* */

module.exports = router;
