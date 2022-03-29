const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const userRoute = require('./userRoute')


router.use('/users', userRoute);

module.exports = router;
