// rendering the views
var fs = require("fs");

// function to insert {{}} values into the html content
function mergeValues(values, content) {
	// cycle over the keys(values: username, badge, javascriptpoints)
	for (var key in values) {
		// Replace all {{key}} with the value from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}
	// return the merged content
	return content;
};

// this method allows you to write out the contents of a file based on the arguments you give it
function view(templateName, values, response) {
	// read from the template files (syncronously)
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
	// insert values into the content
	fileContents = mergeValues(values, fileContents);

	// write out the contents to the response
	response.write(fileContents);
}

module.exports.view = view;

