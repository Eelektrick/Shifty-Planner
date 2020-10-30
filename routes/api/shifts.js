const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/shifts"
router.route("/")
  .get(shiftController.findAll)
  .post(shiftController.create);

// Matches with "/api/shifts/:id"
router
  .route("/:id")
  .get(shiftController.findById)
  .put(shiftController.update)
  .delete(shiftController.remove);

module.exports = router;