const router = require('express').Router();
const { Post, User, Comment } = require('../../models');





// route is /api/posts/


router.get('/:id', async (req, res) => {
    try {

        const singePostData = await Post.findByPk(req.params.id, {
            include: [{ model: User }, { model: Comment }]
        });


        const post = singePostData.get({ plain: true });

        res.render('single-post', post);
        console.log(post);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;