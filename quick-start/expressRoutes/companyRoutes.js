
var express = require('express');
var app = express();
var companyRoutes = express.Router();


var company = require('../models/company-profile');


companyRoutes.route('/add').post( function (req, res) {
	var company = new company(req.body);
	company.save().then( item => {
		res.status(200).json({'company': 'company added'});
	})
	.catch(err => {
		res.status(400).send("unable to add company");
	});
});


companyRoutes.route('/').get(function (req, res) {
	company.find((err, companies) =>  {
		if (err) {
			console.log(err);
		}
		else {
			res.json(companies);
		}
	});
});

companyRoutes.route('/edit-company/:name').post(function (req, res) {
	company.findById(req.params.id, function (err, coin) {
		if (!company) {
			return next(new Error('Could not load company'));
		}
		else {
			company.name = req.body.name;
			company.name.founder = req.body.founder;
			company.name.industry = req.body.industry;
			company.name.funding_series = req.body.funding_series;
			company.name.amount_raised = req.body.amount_raised;
			company.name.current_val = req.body.current_val;
			
			company.save().then(company => {
				res.json('Update complete');
			})
			.catch(err => {
				res.status(400).send("unable to update profile");
			});
		}
	});
});

companyRoutes.route('/delete/:id').get(function (req, res) {
	company.findByIdAndRemove({_id: req.params.id}, function (err, coin) {
		if (err) {
			res.json(err);
		}
		else {
			res.json('company was removed');
		}
	});
});

module.export = companyRoutes;