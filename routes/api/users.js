const config = require('config');
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/User')
const gravatar = require('gravatar')


router.post('/register', [
    
    check('name', 'Name is Required').not().isEmpty(),
    check('lastname', 'Last Name is Required').not().isEmpty(),
    check('username', 'Username is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    // check('role', 'Please define your role').not().isEmpty(),
    check('password', 'Please enter a password between 8 or more characters!!').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() })
    } else {
        const { name, lastname, username, email, password, role } = req.body;

        User.findOne({ email })
            .then(user => {
                if (user) {
                    res.json({ error: 'User already exists..' })
                } else {
                    const avatar = gravatar.url(email, {
                        s: '200',
                        r: 'pg',
                        d: 'mm'
                    })
                    user = new User({
                        name,
                        lastname,
                        username,
                        email,
                        avatar,
                        password,
                        role
                    })
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(user.password, salt, (err, hashedpassword) => {
                            user.password = hashedpassword
                            user.save()

                            const payload = {
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    avatar: user.avatar,
                                    password: user.password,
                                    role: user.role,
                                }
                            }

                            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000000 }, (err, token) => {
                                if (err) throw err
                                res.json({ token })
                            })

                        })
                    })
                }
            })
            .catch(err => {
                console.error(err.message)
                res.status(500).send('Server error')
            })
    }


})



router.get('/offers', (req, res) => {
    User.find({$or: [ {role: "both"}, {role: "offers"} ]})
        .then(users => res.json(users))
        .catch(err => {
            console.error(err.message);
            res.status(404).json({msg: "User not found!"})
        })
})

router.get('/demandes', (req, res) => {
    User.find({$or: [ {role: "both"}, {role: "demander"} ]})
        .then(users => res.json(users))
        .catch(err => {
            console.error(err.message);
            res.status(404).json({msg: "User not found!"})
        })
})


router.put('/:id', (req, res) => {
    let newInfos = req.body
    User.findByIdAndUpdate(req.params.id, newInfos)
        .then(user => res.json(user))
        .catch(err => console.error(err.message))
})
router.put('/services/:id', (req, res) => {
    let oneService = {}
    let AllServices = []
    // console.log(req.body);
    oneService.service = req.body.service
    oneService.commentaire = req.body.commentaire
    // if(commentaire) oneService.commentaire = commentaire
    // if(service) oneService.service = service  
    AllServices = AllServices.concat(oneService)
    console.log(AllServices)

    User.findByIdAndUpdate(req.params.id, {$set: [...AllServices, oneService]})
    .then(user => res.json(user))
    .catch(err => console.error(err.message))
    
})



module.exports = router;