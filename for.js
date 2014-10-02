// var Friends = ["Meg", "Ads", "Bea"];
// var length = (Friends.length);
// for (var i=0; i<(Friends.length); i++) {
// 	console.log("\"Hello, " + Friends[i] + "!\"");	
// }

// version with bonus: Have the previous person say hello to the current person.

var Friends = ["Meg", "Ads", "Bea"];
var length = (Friends.length);
for (var i=0; i<(Friends.length); i++) {
	if (i === 0){
		console.log("\"Hello, " + Friends[i] + "!\"");
	} else {
	console.log("\"" + Friends[i-1] + " says Hello, " + Friends[i] + "!\"");
	}
}
