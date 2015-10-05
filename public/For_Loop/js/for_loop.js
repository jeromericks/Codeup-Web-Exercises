(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];

	for(var i = 9; i <= 10; i++){
		for(var j = 0; j <= 10; j++){
			console.log(i * j);
			body.innerHTML += "<p>" + (i * j) + "</p>";
			console.log("inner loop");
		}
		console.log("outer loop");
	}
    

	// var number = 99;

	// while(number >= 1){
	// 	if(number == 1){
	// 		console.log(number + " bottle of beer on the wall. Take it down, pass it around.");
	// 		body.innerHTML += "<p>" + number + " bottle of beer on the wall, Take it down, pass it around. </p>";
	// 	} else {
	// 		console.log(number + " bottles of beer on the wall. Take one down, pass it around.");
	// 		body.innerHTML += "<p>" + number + " bottles of beer on the wall. Take one down, pass it around. </p>";
	// 	}
	// 	number--;

	// }
	// console.log("No more bottles of beer. Someone go to the store.");
	// body.innerHTML += "<p> No more bottles of beer. Someone go to the store. </p>";


	// for(var number = 99; number >= 1; number--){
	// 	if(number == 1){
	// 		console.log(number + " bottle of beer on the wall. Take it down, pass it around.");
	// 		body.innerHTML += "<p>" + number + " bottle of beer on the wall, Take it down, pass it around. </p>";
	// 	} else {
	// 		console.log(number + " bottles of beer on the wall. Take one down, pass it around.");
	// 		body.innerHTML += "<p>" + number + " bottles of beer on the wall. Take one down, pass it around. </p>";
	// 	}
	// }
	// console.log("No more bottles of beer. Someone go to the store.");
	// body.innerHTML += "<p> No more bottles of beer. Someone go to the store. </p>";


	// var number = 99;

	// do{
	// 	if(number > 1){
	// 		console.log(number + " bottles of beer on the wall");
	// 	} else {
	// 		console.log(number + " bottle of beer on the wall. It\'s our last bottle of beer.");
	// 	}
	// 	number--;
	// } while (number === 0);
	// 	console.log("no mas");


}());