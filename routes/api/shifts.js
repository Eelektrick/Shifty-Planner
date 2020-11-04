const router = require("express").Router();
const shiftController = require("../../controllers/shiftController");

// Matches with "/api/shifts"
router.route("/")
  .get(shiftController.findAll)
  .post(shiftController.create);
  
router.route("/:id/ignore")
  .put(shiftController.saveID)

router.route("/:id/remove")
  .put(shiftController.removefromAvd)

router.route("/:id/reject")
  .put(shiftController.saveRejectID)

router.route("/:id/approve")
  .put(shiftController.saveAvdDetails)

router.route("/byAuth")
  .get(shiftController.findByAuthId)

router.route("/byAvdLists")
  .get(shiftController.findAvdLists)

router.route("/:id/multiUpdate")
  .put(shiftController.multiUpdateMyDetails)
// Matches with "/api/shifts/:id"    
router
  .route("/:id")
  .put(shiftController.update)

module.exports = router;