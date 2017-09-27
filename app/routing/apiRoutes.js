// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also 
//      be used to handle the compatibility logic. 
var swolemates = require("../data/swolemates.js");
var path = require("path");

var difference = 0;

module.exports = function(app){
	app.get('/api/swolemates', function(req, res) {
		res.json(swolemates);
	});

	app.post('/api/swolemates', function(req, res) {
		// grabs new data from survey scores to compare with swolemates array (body comes from page)
		var newSurveyScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var closestMatch = 0;

		// loop through swolemates array
		for (var i = 0; i < swolemates.length; i++) {
			var scoresDiff = 0;
			// loop through scores to compare friends
			for (var j = 0; j < newSurveyScores.length; j++) {
				scoresDiff += (Math.abs(parseInt(swolemates[i].scores[j]) - parseInt(newSurveyScores[j])));			
			}

			// push results into scoresArray
				scoresArray.push(scoresDiff);
			}

			// after swolemates are compared find the closest match
			for (var i = 0; i<scoresArray.length;i++) {
				if(scoresArray[i] <= scoresArray[closestMatch]){
					closestMatch = i;
				}
			}

			// return closest match data
			var swolemate = swolemates[closestMatch];
			res.json(swolemate);

			// push new survey submission into swolemates array
			swolemates.push(req.body);
		});
	};