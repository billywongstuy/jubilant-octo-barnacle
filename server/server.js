import { DB } from './config/DB.js';


const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose')
	config = require('./config/DB');
	founderRoutes = require('./expressRoutes/founderRoutes');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => { console.log('Database is connected') },
	err => { console.log('Can not connect to the database' + err)}
	);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/founder', founderRoutes);

const port = process.env.PORT || 4000;



var server = app.listen(() => {
	console.log('Listening on port ' + port);
})

