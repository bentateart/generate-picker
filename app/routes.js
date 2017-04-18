var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

var express = require('express')

var router = express.Router()

// Route index page
router.get('/', function (req, res) {
	res.render('index')
})

// add your routes here

router.post('/3-juggling-feat', function (req, res) {

	var jugglingAbility = req.session.data['juggling-ability']

	if (jugglingAbility == "Three or more balls") {
		res.redirect('/3-juggling-feat')
	}

	else {
		res.redirect('/2a-ineligible')
	}

})

module.exports = router
