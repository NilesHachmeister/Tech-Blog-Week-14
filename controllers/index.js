const router = require('express').Router();
const postRoutes = require('./api/index');

router.use('/', postRoutes);

module.exports = router;
