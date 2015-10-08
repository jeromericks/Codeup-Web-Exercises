(function () {
	"use strict";

	var body = document.getElementsByTagName('body')[0];
	var books = 
	[{
		"title" : "To Kill a Mockingbird",
		"author" : 
			{
				"lastName" : "Lee", 
				"firstName" : "Harper"
			}
	},
	{
		"title" : "The Adventures of Tom Sawyer",
		"author" : 
			{
				"lastName" : "Twain", 
				"firstName" : "Mark"
			}
	},
	{
		"title" : "Moby-Dick",
		"author" : 
			{
				"lastName" : "Melville", 
				"firstName" : "Herman"
			}
	},
	{
		"title" : "Frankenstein",
		"author" : 
			{
				"lastName" : "Shelley", 
				"firstName" : "Mary"
			}
	},
	{
		"title" : "Gulliver's Travels",
		"author" : 
			{
				"lastName" : "Swift", 
				"firstName" : "Jonathan"
			}
	}];

	console.log(books);

	books.forEach(function (book, index, array) {
		console.log("Book #" + (index + 1));
		console.log("Title: " + book.title);
		console.log("Author: " + book.author.lastName + ", " + book.author.firstName);
		console.log("---");
		body.innerHTML += "<p>Book #" + (index + 1) + "</p>";
		body.innerHTML += "<p>Title: " + book.title + "</p>";
		body.innerHTML += "<p>Author: " + book.author.lastName + ", " + book.author.firstName + "</p>";
		body.innerHTML += "<p>---</p>";
	});

}());
