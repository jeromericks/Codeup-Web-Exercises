(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];

	function rectangleArea(width, length) {
		var area = width * length;
		return area;
	}
	console.log(rectangleArea(6, 3));
	body.innerHTML += "<p>Area of Rectangle: " + rectangleArea(6, 3) + "</p>";


	function circleArea(radius) {
		var area = Math.PI * Math.pow(radius, 2);
		return area;
	}
	console.log(circleArea(5));
	body.innerHTML += "<p>Area of Circle: " + circleArea(5) + "</p>";


	function triangleArea(base, height) {
		var area = 0.5 * base * height;
		return area;
	}
	console.log(triangleArea(4, 4));
	body.innerHTML += "<p>Area of Triangle: " + triangleArea(4, 4) + "</p>";


	function trapezoidArea(base1, base2, height) {
		var area = (base1 + base2) / 2 * height;
		return area;
	}
	console.log(trapezoidArea(2, 3, 3));
	body.innerHTML += "<p>Area of Trapezoid: " + trapezoidArea(2, 3, 3) + "</p>";


	function circlePerimeter(radius) {
		var area = 2 * Math.PI * radius;
		return area;
	}
	console.log(circlePerimeter(5));
	body.innerHTML += "<p>Perimeter of Circle: " + circlePerimeter(5) + "</p>";


}());
