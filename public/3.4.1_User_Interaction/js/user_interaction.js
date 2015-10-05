(function () {
	"use strict";

    var response;
	var userName = prompt('What\'s your name?');
        while (userName === null || userName === "") { //noprotect
            userName = prompt('What\'s your name?');
        }

    userName = userName[0].toUpperCase() + userName.substring(1,100);    

    alert("Welcome " + userName + "!!!");

    do {
		response = prompt("Do you like pizza?");
	} while (response === "");
		if (response == "no" || response == "No" || response == "NO"){
			alert("What's wrong with you?");
		}
		else if (response == "yes" || response == "Yes" || response == "YES"){
			alert("YAY! I like pizza too!");
		}

}());