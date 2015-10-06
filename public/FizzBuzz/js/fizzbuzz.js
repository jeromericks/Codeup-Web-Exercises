(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];

	for(var i = 1; i <= 100; i++){
		if(i % 3 === 0 && i % 5 === 0){
			console.log("FizzBuzz");
			body.innerHTML +="<p> FizzBuzz </p>";
			continue;
		}
		else if(i % 3 === 0){
			console.log("Fizz");
			body.innerHTML +="<p> Fizz </p>";
			continue; 
		}
		else if(i % 5 === 0){
			console.log("Buzz");
			body.innerHTML +="<p> Buzz </p>";
			continue;
		}
		else{
			console.log(i);
			body.innerHTML +="<p>" + i + "</p>";
		}
	}

}());