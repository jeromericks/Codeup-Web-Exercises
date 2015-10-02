"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var favorite = 'blue';

if(color == 'red'){
	document.write("<p class='red'>Red is the color of blood.</p>");
	console.log("Red is the color of blood.");
}
else if(color == 'orange'){
	document.write("<p class='orange'>Orange is the color of an orange.</p>");
	console.log("Orange is the color of an orange.");
}
else if(color == 'yellow'){
	document.write("<p class='yellow'>Yellow is the color of the sun.</p>");
	console.log("Yellow is the color of the sun.");
}
else if(color == 'green'){
	document.write("<p class='green'>Green is the color of an apple.</p>");
	console.log("Green is the color of an apple.");
}
else if(color == 'blue'){
	document.write("<p class='blue'>Blue is the color of the sky.</p>");
	console.log("Blue is the color of the sky.");
}
else{
	document.write("<p>I do not know anything by that color.</p>");
	console.log("I do not know anything by that color.");
}

var message = (color == favorite) ? document.write("<p>You guessed my favorite color!</p> :)") : document.write("<p>You did not guess my favorite color.</p> :(");
var message2 = (color == favorite) ? console.log("You guessed my favorite color! \n\n:)") : console.log("You did not guess my favorite color. \n\n:(");