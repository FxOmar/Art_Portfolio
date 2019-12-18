const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { registerValidation, loginValidation } = require('../validation')

const router = express.Router()

router.post('/api/v1/auth/register', async (req, res) => {
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const emailExist = await User.findOne({email: req.body.email})
    if (emailExist) return res.status(400).send('Email already exists.')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword
	})
    try {
        await user.save((err) => {
            if (err) throw err
            return res.status(201).send({
                success: 'true',
                message: 'User added successfully',
            })
        })
    } catch (err){
        res.status(400).send(err)
    }
})


router.post('/api/v1/auth/login', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('Email or password is wrong!')

    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).send('Invalid password!')

    const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token)

})

module.exports = router
