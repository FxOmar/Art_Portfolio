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
	if (error) return res.status(400).send(error.details[0].message)

	const user = await User.findOne({
		email: req.body.email
	})
	if (!user) return res.status(400).send('Email or password is wrong!')

	const validPass = await bcrypt.compare(req.body.password, user.password)
	if (!validPass) return res.status(400).send('Invalid password!')

	const token = await jwt.sign({
		_id: user._id
	}, process.env.TOKEN_SECRET)
	res.header('token', token).send({
		token
	})

})

// get user by his id
router.get('/api/v1/auth/user', (req, res) => {
	const token = req.header('token')
	try {
		decoded = jwt.verify(token, process.env.TOKEN_SECRET);
	} catch (e) {
		res.status(401).send({
			error: {
				message: 'Unauthenticated'
			}
		});
	}
	var userId = decoded._id;
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
router.put('/api/v1/auth/profile', async (req, res) => {
    // Upload avatar image
	try {
		if (!req.files) {
			res.send({
				status: false,
				message: 'No file uploaded'
			});
		} else {
			//Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
			let avatar = req.files.avatar;

			//Use the mv() method to place the file in upload directory (i.e. "uploads")
			// avatar.mv('./uploads/' + avatar.name);

			//send response
			res.send({
				status: true,
				message: 'File is uploaded',
				data: {
					name: avatar.name,
					mimetype: avatar.mimetype,
					size: avatar.size
				}
			});
		}
	} catch (err) {
		res.status(500).send(err);
	}
})
module.exports = router
