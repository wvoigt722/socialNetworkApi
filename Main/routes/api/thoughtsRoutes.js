const router = require("express").Router();
const {
  getThought,
  getThoughts,
  updateThought,
  deleteThought,
  createThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions/:reactionId")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
