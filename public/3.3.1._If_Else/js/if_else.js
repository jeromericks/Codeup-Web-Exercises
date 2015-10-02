"use strict";

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];
var favorite = 'blue';
var message; 
var write;

if(color == 'red'){
	write = "<p class='red'>Red is the color of blood.</p>"
	message = "Red is the color of blood."
}
else if(color == 'orange'){
	write = "<p class='orange'>Orange is the color of an orange.</p>"
	message = "Orange is the color of an orange."
}
else if(color == 'yellow'){
	write = "<p class='yellow'>Yellow is the color of the sun.</p>"
	message = "Yellow is the color of the sun."
}
else if(color == 'green'){
	write = "<p class='green'>Green is the color of an apple.</p>"
	message = "Green is the color of an apple."
}
else if(color == 'blue'){
	write = "<p class='blue'>Blue is the color of the sky.</p>"
	message = "Blue is the color of the sky."
}
else{
	write = "<p>I do not know anything by that color.</p>"
	message = "I do not know anything by that color."
}

document.write(write);
console.log(message);

message = (color == favorite) ? "You guessed my favorite color! \n\n:)" : "You did not guess my favorite color. \n\n:(";

console.log(message);
document.write(message);