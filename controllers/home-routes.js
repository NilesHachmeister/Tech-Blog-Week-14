const router = require('express').Router();
const { User, Post, Comment } = require('../models');

const logginCheck = require('../utils/auth')




router.get('/', (req, res) => {

    res.render('homepage');
});


router.get('/login', async (req, res) => {

    res.render('login');

});

router.get('/signup', async (req, res) => {

    res.render('signup');

});

module.exports = router;