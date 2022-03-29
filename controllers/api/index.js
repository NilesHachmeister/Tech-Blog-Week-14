const post = require('express').Router();
const { User, Post, Comment } = require('../../models');

post.get('/', async (req, res) => {
    console.log("here");

    try {
        const dbPostData = await Comment.findAll();

        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

module.exports = post;
