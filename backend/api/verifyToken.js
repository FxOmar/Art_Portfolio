const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const access_token = req.header('access_token')
	try {
        decoded = jwt.verify(access_token, process.env.TOKEN_SECRET);
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