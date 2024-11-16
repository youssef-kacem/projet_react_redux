const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const mongoose = require('mongoose')


router.get('/', auth, (req, res) => {
    Profile.findOne({ user: req.user.id })
        .then(user => {
            res.json(user)
        })
        .catch(err => console.log(err.message))
})


// @route GET api/profil/me
// @desc Get current users profile
// @access Private

router.get('/me', auth, (req, res) => {
    Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])
        .then(profile => {
            if (!profile) {
                res.status(400).json({ msg: 'There is no profile for this user!.' })
            }
            res.json(profile)
        })
        .catch(err => console.log(err.message))
})


router.post(
    '/',
    [
        auth,
        [
            check('firstname', 'Please enter your first name')
                .not()
                .isEmpty(),
            check('lastname', 'please enter your last name')
                .not()
                .isEmpty(),
            check('adress', 'please enter your adress').not().isEmpty(),
            check('PhoneNumber', 'please enter your phone number').not().isEmpty(),

        ]
    ],
    async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const {
            firstname,
            website,
            lastname,
            adress,
            PhoneNumber,
            Zone,
            AllDemandes,
            availability,
            zipCode
        } = req.body;



        let AllServices = []
        for (let i = 0; i <= req.body.items; i++) { // DONT FORGOT TO SEND THE NUMBER OF SERVICES YOU CREATE
            AllServices[i] = {
                serviceName: req.body[`service${i}`],
                serviceId: mongoose.Types.ObjectId()
            }
        }

        // let AllDemandes = [];
        // for (var i = 0; i <= req.body.AllDemandes.length - 1; i++) {
        // AllDemandes[i] = {
        // demandeName: req.body.AllDemandes[i],
        // demandeId: mongoose.Types.ObjectId()
        // }
        // }
        // console.log(req.body.availability)
        // let availability = []
        // for (var i = 0; i <= req.body.availability.length - 1; i++) {
        // availability[i] = {
        // Day: req.body.availability[i],
        // Id: mongoose.Types.ObjectId()

        // }

        // }

        try {
            let profile = await Profile.findOne({ user: req.user.id });

            let profileFields = {
                user: req.user.id,
                firstname,
                lastname,
                adress,
                PhoneNumber,
                website,
                Zone,
                zipCode,
                AllDemandes,
                AllServices,
                availability
            }
            if (profile) {
                // Update
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                )

                return res.json(profile)
            }

            // Create
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    }
);

// @route Git api/profil
// @desc Git all profile
// @access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route Git api/profil/user/:user_id
// @desc Git profile by userr ID
// @access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id })

        if (!profile)
            return res.status(400).json({ msg: 'There is no profile for this user..' })

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' })
        }
        res.status(500).send('Server Error');
    }
});
// @route DELETE api/profil
// @desc Delete profile, user & posts
// @access Private
router.delete('/', auth, async (req, res) => {
    try {
        // @todo - remove user posts

        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        // Remove user
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;