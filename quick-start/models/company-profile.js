var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Defining collections for indvidual

var company = new Schema ({
	name: {
		type: String,

		founder: { type: String },
		industry: { type: String },
		funding_series: { type: String },
		amount_raised: { type: Number },
		current_val: { type: Number }

	},
	{
		collections: 'company'
	}
});

module.exports = mongoose.model('company', companies);

