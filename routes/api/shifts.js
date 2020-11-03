const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/shifts"
router.route("/")
  .get(shiftController.findAll)
  .post(shiftController.create);
  

router.route("/:id/ignore")
  .put(shiftController.saveID)

router.route("/:id/approve")
.put(shiftController.saveAvdDetails)

router.route("/byAuth")
  .get(shiftController.findByAuthId)

router.route("/byAvdLists")
  .get(shiftController.findAvdLists)

// Matches with "/api/shifts/:id"    .get(shiftController.findById)
router
  .route("/:id")
  .put(shiftController.update)
  .delete(shiftController.remove);

module.exports = router;