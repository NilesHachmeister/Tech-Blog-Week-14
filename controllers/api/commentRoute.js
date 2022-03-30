const router = require('express').Router();
const { Comment } = require('../../models');
const logginCheck = require('../../utils/auth');

// route is /api/comments/

// this creates a new comment based on what the user input and adds it to the database
router.post('/:id', logginCheck, async (req, res) => {

    // this takes the users input and creates a comment based on it
    try {
        const commentData = await Comment.create(
            {
                content: req.body.content,
                post_id: req.params.id,
                user_id: 1
            });
        res.status(200).json(commentData);

        // catches any errors
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;