const router = require("express").Router();
const shiftRoutes = require("./shifts");

// Book routes
router.use("/shifts", shiftRoutes);

module.exports = router;
