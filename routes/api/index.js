const router = require("express").Router();
const shiftRoutes = require("./shifts");

// Shift routes
router.use("/shifts", shiftRoutes);

module.exports = router;
