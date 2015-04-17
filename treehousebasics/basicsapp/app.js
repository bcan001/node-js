// problem: we need a simple way to look at a users badge count and js points on treehouse
// solution: use node.js to connect to Treehouse API to get profile info to print out

// connect to the api url at http://teamtreehouse.com/username.json
// read the data
// parse the data
// print the data



var profile = require('./profile.js')

// var users = ['bencaneba','chalkers']
// users.forEach(function(username){
//   profile.get(username);
// });


//console.dir(process);
//console.dir(process.argv);


var users = process.argv.slice(2);
users.forEach(profile.get);