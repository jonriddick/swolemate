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
		// grabs new data from survey scores to compare with friendList array (body comes from page)
		var newSurveyScores = req.body.scores;
		var scoresArray = [];
		var friendCount = 0;
		var closestMatch = 0;

		// loop through friendList array
		for (var i = 0; i < swolemates.length; i++) {
			var scoresDiff = 0;
			// loop through scores to compare friends
			for (var j = 0; j < newSurveyScores.length; j++) {
				scoresDiff += (Math.abs(parseInt(swolemates[i].scores[j]) - parseInt(newSurveyScores[j])));			
			}

			// push results into scoresArray
				scoresArray.push(scoresDiff);
			}

			// after friends are compared find the closest match
			for (var i = 0; i<scoresArray.length;i++) {
				if(scoresArray[i] <= scoresArray[closestMatch]){
					closestMatch = i;
				}
			}

			// return closest match data
			var disneyFriend = swolemates[closestMatch];
			res.json(disneyFriend);

			// push new survey submission into friendList array
			swolemates.push(req.body);
		});
	};


	// app.post('/api/swolemates', function(req, res) {
	
	// 	var swolemateMatch = {
	// 		name: "",
	// 		photo: "",
	// 		matchDifference: 1000
	// 	};

	// 	var userData = req.body;

	// 	var userName = userData.name;
	// 	var userPhoto = userData.photo
	// 	var userScores = userData.scores;

	// 	var difference = 0;

	// 	for(var i = 0; i <[swolemates].length-1; i++){
	// 		console.log(swolemates[i].name);
	// 		difference = 0;

	// 		for(var x = 0; x < 10; x++){
	// 			difference += Math.abs(parseInt(userScores[x]) - parseInt(swolemates[i].scores[x]));
	// 			if (difference <= swolemateMatch.matchDifference){
	// 				swolemateMatch.name = swolemates[i].name;
	// 				swolemateMatch.photo = swolemates[i].photo
	// 				swolemateMatch.matchDifference = difference;
	// 			}
	// 		}


	// 	}

	// 	swolemates.push(userData);
	// 	res.json(swolemateMatch);
	// });
//};




