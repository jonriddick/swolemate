// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

var path = require("path");
var swolemates = require("../data/swolemates.js");

var swolemates = [];

module.exports = function(app){
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	app.get('/api/swolemates', function(req, res) {
		return res.json(swolemates);
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));

	});
}