const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/shifts"
router.route("/")
  .get(shiftController.findAll)
  .post(shiftController.create);

  router.route("/:id/ignore")
  .put(shiftController.saveID)

// Matches with "/api/shifts/:id"    .get(shiftController.findById)
router
  .route("/:id")
  .get(shiftController.findByAuthId)
  .put(shiftController.update)
  .delete(shiftController.remove);

module.exports = router;