"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var write;
var message;

switch (color){
	case 'red':
		write = "<p class='red'>Red is the color of blood.</p>"
		message = "Red is the color of blood."
		break;
	case 'orange':
		write = "<p class='orange'>Orange is the color of an orange.</p>"
		message = "Orange is the color of an orange."
		break;
	case 'yellow':
		write = "<p class='yellow'>Yellow is the color of the sun.</p>"
		message = "Yellow is the color of the sun."
		break;
	case 'green':
		write = "<p class='green'>Green is the color of an apple.</p>"
		message = "Green is the color of an apple."
		break;
	case 'blue':
		write = "<p class='blue'>Blue is the color of the sky.</p>"
		message = "Blue is the color of the sky."
		break;
	default: 
		write = "<p>I do not know anything by that color.</p>"
		message = "I do not know anything by that color."
}

document.write(write);
console.log(message);