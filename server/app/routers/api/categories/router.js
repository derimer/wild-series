const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const { browse, read } = require("../../../controllers/categoryActions");
// Route to get a list of items
router.get("/", browse);
router.get("/:id", read);
/* Here you code */

/* ************************************************************************* */

module.exports = router;
