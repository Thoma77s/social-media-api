const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  addThought,
  removeThought,
  updateThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');



router
.route('/')
.get(getAllThought)
.post(addThought);


router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

router
.route('/:thoughtId/reaction')
.post(addReaction);

router
.route('/:thoughtId/reaction/:reactionId')
.delete(removeReaction)


module.exports = router;