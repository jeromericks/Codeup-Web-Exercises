(function () {
	"use strict";


	var person = {};
	person.firstName = "Jerome";
	person.lastName = "Ricks";

	person.sayHello = function () {
		alert('Hello ' + this.firstName + ' ' + this.lastName);
	};

	person.sayHello();

}());
