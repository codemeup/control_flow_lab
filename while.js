var i = 99;
while(i>0) {
	if(i<=1) {
		console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down, pass it around, no bottles of beer on the wall...");
		break;
	} else {
		console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around, " + i + " bottles of beer on the wall...");
	i = i - 1;
	}
}
