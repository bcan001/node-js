var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// create a querystring module
var querystring = require("querystring");


// headers are values that are hidden from the user
// change our content-type from text/plain to text/html
var commonHeaders = {'Content-Type': 'text/html'};

function homeRoute(request, response) {
	if (request.url === '/') {
		// making the search form work:
		// if the request is a get request, we show what we normally show
		if (request.method.toLowerCase() === "get") {
			response.writeHead(200, commonHeaders);
		 	renderer.view("header", {}, response);
		 	renderer.view("search", {}, response);
		 	renderer.view("footer", {}, response);
		 	response.end();
	 	} else {
	 		// if the request is a post request:
	 		request.on("data", function(postBody){
	 			// convert the buffer into a string
	 			//console.log(postBody.toString());

	 			// parse the querystring so you can access the js object and its attributes (like username)
	 			var query = querystring.parse(postBody.toString());
	 			// write in the http head to redirect to the location: /username
	 			response.writeHead(303, {"Location": "/" + query.username});
	 			response.end();

	 		});
	 		// if url == '/' && post
 			// get post data from body
 			// extract the username
 			// redirect to /:username
	 	}
	}
}

function userRoute(request, response) {
	var username = request.url.replace("/", "");
	if (username.length > 0) {
		response.writeHead(200, commonHeaders);
	 	renderer.view("header", {}, response);

	 	// get json from treehouse (we created the Profile() function in the previous tutorial)
	 	var studentProfile = new Profile(username);
	 	studentProfile.on("end", function(profileJSON){
	 		// show profile
	 		var values = {
	 			avatarUrl: profileJSON.gravatar_url,
	 			username: profileJSON.profile_name,
	 			badges: profileJSON.badges.length,
	 			javascriptPoints: profileJSON.points.JavaScript,
	 			totalPoints: profileJSON.points.total
	 		}
	 		// simple response
		 	renderer.view("profile", values, response);
	 		renderer.view("footer", {}, response);
		 	response.end();
	 	});	
	 	// on 'error'
	 	studentProfile.on("error", function(error){
	 		// show error
	 		renderer.view("error", {errorMessage: error.message}, response);
	 		renderer.view("search", {}, response);
	 		renderer.view("footer", {}, response);
		 	response.end();
	 	});

	}
}

// export the routes so they can be used in app.js
module.exports.home = homeRoute;
module.exports.user = userRoute;