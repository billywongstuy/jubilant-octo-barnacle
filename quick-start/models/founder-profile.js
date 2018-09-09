var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Defining collections for indvidual

var founder = new Schema ({
	name: {
		type: String
	},
	email: {
		type: String
	},
	company_name: {
		type: String
	}, 
	industry: {
		type: String
	},
	{
		collections: 'founders'
	}
});

module.exports = mongoose.model('founder', founders);

