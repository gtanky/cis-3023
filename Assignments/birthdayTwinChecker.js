var $ = function (id) {
	return document.getElementById(id);
};
var main = function () {
	/*
	var numTrials = parseInt(prompt("Enter the number of trials to run here"));
	for (var i = 0; i < numTrials; i++) {//run the test the number of times the user requests
		if (coinIsHead(randomNumGenerator())) {
			numSuccesses++;
		}//if
	}//for
	var probabilityAverage = numSuccesses / numTrials;
	alert("Probability of getting a head on a coin toss is: \n" + probabilityAverage.toFixed(4) + "\n after " + numTrials + " trial(s).")
	//*/
	numTrials = parseInt(prompt("How many times would you like to run this? Please enter a positive whole number."));
	for (var i = 0; i < numTrials; i++) {
		if (arrayMatcher(randomArrayGenerator())) {
			alert("Birthday twins found!!");
		}
		if (!(arrayMatcher(randomArrayGenerator()))) {
			alert("There are no birthday twins.");
		}
	}
}
var arrayMatcher = function (usrArray) {
	var map = {};
	var matchFound = false;
	for (var i = 0; i < usrArray.length; i++) {
		if (map[usrArray[i]]) {
			matchFound = true;
			break;
		}//if
		map[usrArray[i]] = true;
	}//for
	return (matchFound);
}

var randomArrayGenerator = function () {
	var arraySize = 25;
	//alert(arraySize);
	var usrArray = new Array(arraySize);
	for (var i = 0; i < usrArray.length; i++) {
		usrArray[i] = Math.floor(Math.random() * 365) + 1;
	}
	return (usrArray);
}


main();
