var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.post('/filter-register', function (req, res) {

	var register = req.session.data['register']

	if (register == "Countries") {
		res.redirect('/filter-register')
	}

	else {
		res.redirect('/not-available')
	}
})

module.exports = router
