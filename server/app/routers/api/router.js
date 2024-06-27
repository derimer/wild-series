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

const categoriesRouter = require("../categories/router");

router.use("/items", itemsRouter);
router.use("/programs", programsRouter);
router.use("/categories", categoriesRouter);
/* ************************************************************************* */

module.exports = router;
