const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const {
	registerValidation,
	loginValidation
} = require('../validation')

const router = express.Router()

router.post('/api/v1/auth/register', async (req, res) => {
	const {
		error
	} = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const emailExist = await User.findOne({
		email: req.body.email
	})
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
	} catch (err) {
		res.status(400).send(err)
	}
})


router.post('/api/v1/auth/login', async (req, res) => {
	const {
		error
	} = loginValidation(req.body)
	if (error) return res.status(401).send(error.details[0].message)

	const user = await User.findOne({
		email: req.body.email
	})
	if (!user) return res.status(401).send('Email or password is wrong!')

	const validPass = await bcrypt.compare(req.body.password, user.password)
	if (!validPass) return res.status(402).send('Invalid password!')

	const access_token = await jwt.sign({
		_id: user._id
	}, process.env.TOKEN_SECRET)
	res.header('access_token', access_token).send({
		access_token
	})

})

// get the current user
router.get('/api/v1/auth/user', (req, res) => {
	const access_token = req.header('access_token')
	try {
		decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
	} catch (e) {
		res.status(401).send({
			error: {
				message: 'Unauthenticated'
			}
		});
	}
	const userId = decoded._id;
	// Fetch the user by id 
	User.findOne({
		_id: userId
	}).then(function (user) {
		// Do something with the user
		return res.status(200).send({
			user
		});
	});
})

// To update particular user.
router.put('/api/v1/auth/user', (req, res) => {
	const access_token = req.header('access_token')
	try {
		decoded = jwt.verify(access_token, process.env.TOKEN_SECRET)
	} catch (e) {
		res.status(401).send({
			error: {
				message: 'Unauthenticated'
			}
		})
	}
	var userId = decoded._id;
	// get post by id
	User.findById(userId, async (err, user) => {
		if (err) throw err;

		const userinfo = {
			username: req.body.username,
			email: req.body.email,
			password: req.body.newPassword
		}
		
		const validPass = await bcrypt.compare(req.body.password, user.password)
		const salt = await bcrypt.genSalt(10)

		if (userinfo.username)
			user.username = req.body.username
		if (userinfo.email)
			user.email = req.body.email
		if (userinfo.password)
			if (!validPass) 
				return res.status(400).send('Wrong password!')
			else if (req.body.ConfirmPassword === req.body.newPassword){
				hashedPassword = await bcrypt.hash(req.body.newPassword, salt)
				user.password = hashedPassword
			}else 
				res.send({message: 'Password wrong!'})
		user.save((err) => {
			if (err) throw err
			console.log('User successfully updated!')
			res.status(200).send({message: 'User successfully updated!'})
		})
	})
})

module.exports = router
