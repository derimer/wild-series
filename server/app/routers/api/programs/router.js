const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");
// Route to get a list of items
router.get("/", browse);
router.get("/:id", read);
// Route to get a specific item by ID
// router.get("/:id", read);
// Route to add a new item
// router.post("/", add);

/* ************************************************************************* */

module.exports = router;
