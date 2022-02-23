const express = require("express");
const router = express.Router();

const {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
} = require("../controllers/tutorial.controller");

router.route("/").get(getTutorials).post(createTutorial);
router
  .route("/:id")
  .get(getTutorial)
  .put(updateTutorial)
  .delete(deleteTutorial);

module.exports = router;
