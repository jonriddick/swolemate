var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.get('/api/swolemates', function(req, res) {
	
	return res.json(customers);
});



app.post('/api/new', function(req, res) {
	console.log('Works');
	var newSwolemate = req.body;
	
	swolemates.push(newSwolemate);
	
	res.json(newSwolemate);
});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});