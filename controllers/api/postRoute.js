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

// post
router.post('/', async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});



// put
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
                user_id: 1
            },
            {
                where: {
                    id: req.params.id,
                },
            });


        console.log(postData);

        if (!postData) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }


});

// delete
router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with that id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }

});




module.exports = router;