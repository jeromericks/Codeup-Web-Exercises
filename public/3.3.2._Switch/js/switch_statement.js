"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color){
	case 'red':
		document.write("<p class='red'>Red is the color of blood.</p>");
		console.log("Red is the color of blood.");
		break;
	case 'orange':
		document.write("<p class='orange'>Orange is the color of an orange.</p>");
		console.log("Orange is the color of an orange.");
		break;
	case 'yellow':
		document.write("<p class='yellow'>Yellow is the color of the sun.</p>");
		console.log("Yellow is the color of the sun.");
		break;
	case 'green':
		document.write("<p class='green'>Green is the color of an apple.</p>");
		console.log("Green is the color of an apple.");
		break;
	case 'blue':
		document.write("<p class='blue'>Blue is the color of the sky.</p>");
		console.log("Blue is the color of the sky.");
		break;
	default: 
		document.write("<p>I do not know anything by that color.</p>");
		console.log("I do not know anything by that color.");
}

