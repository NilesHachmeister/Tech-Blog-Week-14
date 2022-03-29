const router = require('express').Router();
const { User, Post, Comment } = require('../models');





router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({ include: { model: User } }, { plain: true })
        const posts = dbPostData.map((post) =>
            post.get({ plain: true }));
        res.render('homepage', {
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({ include: { model: User } }, { plain: true })
        const posts = dbPostData.map((post) =>
            post.get({ plain: true }));
        res.render('dashboard', {
            posts,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.get('/login', async (req, res) => {
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});






// const dbPostData = await Post.findAll({
//     include: [
//         {
//             model: comment,
//             attributes: ['content', 'post_id', ],
//         },
//     ],
// });

// const posts = dbPostdata.map((post) =>
//     post.get({ plain: true })
// );


module.exports = router;