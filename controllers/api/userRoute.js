const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    console.log("here");

});



// This function is used in testing. Delete before production
router.get('/', async (req, res) => {
    try {
        const dbUserData = await User.findAll();
        res.json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;