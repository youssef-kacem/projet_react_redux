const express = require('express')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../../models/User')
const auth = require('../../middleware/auth')
const config = require('config');






router.post('/Login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please include a valid password').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.json({ errors: errors.array() })
    } else {
        const { email, password } = req.body
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    res.send({ msg: 'Please Register Bofore ..' })
                } else {

                    bcrypt.compare(String(password), String(user.password), (err, isMatch) => {
                        if (err) {
                            console.log(err.message)

                        } else if (isMatch) {
                            const payload = {
                                user: {
                                    id: user.id,
                                    email: user.email,
                                    password: user.password
                                }
                            }
                            jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000000 }, (err, token) => {
                                if (err) throw err
                                res.json({ token })
                            })
                        } else {
                            res.json({ msg: 'wrong password' })
                        }

                    })
                }

            })
            .catch(err => console.log(err.message))

    }
}

)


router.get('/Login', auth, (req, res) => {
    User.findById(req.user.id)
        .then(user => {
            res.json(user)
        })
        .catch(err => console.log(err.message))
})

module.exports = router;