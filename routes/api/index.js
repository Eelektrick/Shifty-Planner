const router = require("express").Router();
const shiftRoutes = require("./shifts");
const userRoutes = require("./users")

// Shift routes
router.use("/shifts", shiftRoutes);
router.use("/users", userRoutes);

module.exports = router;
