const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);
  

router.route("/:id/ignore")
  .put(userController.saveID)

router.route("/byAuth")
  .get(userController.findByAuthId)

// Matches with "/api/users/:id"    .get(userController.findById)
router
  .route("/:id")
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;