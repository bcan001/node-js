//console.log(scores);

//console.log(typeof scores);

//convert object to string, once the data is received
//parse string into js object
//evaluate parsed object
function complete() {
	console.log('Completed');
}

function run(callback){
	var scores = require('./practice.json');
	for (var grade in scores) {
		console.log(grade + ":" + scores[grade]);
	}
	callback();
	//callback && callback();
};

run(function(){
	complete();
})





// function do_b() {
// 	console.log("b:do this second");
// }

// // expects callback parameter to be a FUNCTION
// //do_a( function(){do_b();} );
// // same thing, whichout using function do_b

// do_a( function() {
// 	console.log("b:do this second");
// });








