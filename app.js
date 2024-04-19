
//import express , dotenv

const express = require("express");

const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config({
	path: './.env'
});

const db = require('./config/db.js');

const routeTache = require('./routes/taches.js');

const app = express();


app.use(bodyParser.json({
	limit: '10000mb'
}));

app.use(bodyParser.urlencoded({
	extended: true,
	limit: '10000mb'
}));

app.use(cors());

app.use('/v1/api/tache', routeTache);


db.sync({
	// force: true
}).then(_ => {
	const port = process.env.PORT
	app.listen(port, () => {
		console.log(`Server started on ${port}`);
	});

})
