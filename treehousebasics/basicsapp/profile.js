var http = require('http');


function printMessage(username, badgeCount, points) {
	var message = username + " has " + points + " points and " + badgeCount + " badges!";
	console.log(message);
};

function getProfile(username) {
  // connect to the api url at http://teamtreehouse.com/username.json
  var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
  	console.log(response.statusCode);
  	// read the data
  	var body = "";
  	response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
    	//console.log(body);
    	//console.log(typeof body); // currently a string, needs to be an object

    	// parse the data (convert to string then convert to a js object). you cannot parse an object coming directly from http get
    	var profile = JSON.parse(body);
    	//console.dir(profile); // pretty prints the js

    	printMessage(username, profile.badges.length, profile.points.JavaScript);

    }); // response on end
  }); // request

  request.on("error", function(error){
  	console.error(error.message);
  });
}


// for the profile module we created, we want to export the module 'get'
module.exports.get = getProfile;





