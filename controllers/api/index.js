const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const userRoute = require('./userRoute')
const postRoute = require('./postRoute')
const commentRoutes = require('./commentRoute')

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comments', commentRoutes);

module.exports = router;
