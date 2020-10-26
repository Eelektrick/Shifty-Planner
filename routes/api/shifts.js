const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/books"
router.route("/")
  .get(shiftController.findAll)
  .post(shiftController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(shiftController.findById)
  .put(shiftController.update)
  .delete(shiftController.remove);

module.exports = router;