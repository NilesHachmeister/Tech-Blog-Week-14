const router = require('express').Router();
const { Comment } = require('../../models');

// post

router.post('/:id', async (req, res) => {
    try {
        const commentData = await Comment.create(
            {
                content: req.body.content,
                post_id: req.params.id,
                user_id: 1
            },);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;