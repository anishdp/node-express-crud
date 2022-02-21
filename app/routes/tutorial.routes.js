const express = require("express");
const router = express.Router();

const {
  getTutorials,
  addTutorial,
  getTutorial,
  updateTutorial,
  deleteTutorial,
} = require("../controllers/tutorial.controller");

router.route("/").get(getTutorials).post(addTutorial);
router
  .route("/:id")
  .get(getTutorial)
  .put(updateTutorial)
  .delete(deleteTutorial);

module.exports = router;
