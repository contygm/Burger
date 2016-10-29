var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function(data) {
		var burgObj = { burgers: data };
		console.log(burgObj);
		res.render('index', burgObj);
	});
});

module.exports = router;