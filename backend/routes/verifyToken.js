const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('token')
	try {
        decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = decoded
        next()
	} catch (e) {
		res.status(401).send({
			error: {
				message: 'Unauthenticated'
			}
		});
	}
}