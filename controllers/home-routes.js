const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const logginCheck = require('../utils/auth')




router.get('/', (req, res) => {
    console.log("here");
    res.render('homepage');
});


router.get('/login', async (req, res) => {

    res.render('login');

});

module.exports = router;