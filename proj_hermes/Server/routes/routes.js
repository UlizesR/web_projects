const router = require('express').Router()
const User = require('../models/User')

// registring  user
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, username, password, picture } = req.body;
        console.log(req)
        const user = await User.create({ firstName, lastName, username, password, picture });
        res.status(201).json(user);
    } catch (e) {
        let msg;
        if (e.code === 11000) {
            msg = 'Username already exists';
        } else {
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg);
    }
})

// login user
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req)
        const user = await User.findByCredentials( username, password );
        user.status = 'online';
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
})

module.exports = router
