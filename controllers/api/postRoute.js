const router = require('express').Router();
const { Post } = require('../../models');

const logginCheck = require('../utils/auth')



// router.get('/', async (req, res) => {
//     try {
//         const dbUserData = await User.findAll();
//         res.json(dbUserData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;