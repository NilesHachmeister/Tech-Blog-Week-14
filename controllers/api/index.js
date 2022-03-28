const post = require('express').Router();
const { User, Post } = require('../../models');

post.get('/', async (req, res) => {
    console.log("here");

    try {
        const dbPostData = await User.findAll();

        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = post;
