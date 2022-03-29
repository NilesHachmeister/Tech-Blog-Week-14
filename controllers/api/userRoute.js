const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');



router.post('/', async (req, res) => {
    try {


        const newUser = req.body;

        newUser.password = await bcrypt.hash(req.body.password, 10);

        const dbUserData = await User.create(newUser);
        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!dbUserData) {
            res
                .status(400)
                .json({ message: 'Incorrect login information. Please try again or sign up. Thank you.' });
            return;
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            dbUserData.password
        );;

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect login information. Please try again or sign up. Thank you.' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res
                .status(200)
                .json({ user: dbUserData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

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