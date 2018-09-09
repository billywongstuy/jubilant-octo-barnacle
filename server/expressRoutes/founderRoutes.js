
var express = require('express');
var app = express();
var founderRoutes = express.Router();


var Founder = require('../models/founder-profile');


founderRoutes.route('/add').post( function (req, res) {
	var founder = new Founder(req.body);
	founder.save().then( item => {
		res.status(200).json({'founder': 'founder added'});
	})
	.catch(err => {
		res.status(400).send("unable to add founder");
	});
});


founderRoutes.route('/').get(function (req, res) {
	Founder.find((err, founders) =>  {
		if (err) {
			console.log(err);
		}
		else {
			res.json(founders);
		}
	});
});

founderRoutes.route('/edit-profile/:name').post(function (req, res) {
	Founder.findById(req.params.id, function (err, coin) {
		if (!founder) {
			return next(new Error('Could not load founder'));
		}
		else {
			founder.name = req.body.name;

			founder.save().then(founder => {
				res.json('Update complete');
			})
			.catch(err => {
				res.status(400).send("unable to update profile");
			});
		}
	});
});

founderRoutes.route('/delete/:id').get(function (req, res) {
	Founder.findByIdAndRemove({_id: req.params.id}, function (err, coin) {
		if (err) {
			res.json(err);
		}
		else {
			res.json('Founder was removed');
		}
	});
});

module.export = founderRoutes;