import { enviroment } from '../environments/environments.prod.ts';

const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose')
	config = require('./config/DB');
	founderRoutes = require('./expressRoutes/founderRoutes');

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://PennApps:environments.pw@quick-biz-qgbc4.mongodb.net/quick-biz?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("quick-biz").collection("founders");
   // perform actions on the collection object
   client.close();
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/founder', founderRoutes);
app.use('/company', companyRoutes);

const port = enviroment.port || 4000;



var server = app.listen(() => {
	console.log('Listening on port ' + port);
})

