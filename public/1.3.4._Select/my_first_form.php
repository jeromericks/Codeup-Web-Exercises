<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="checkbox.png" type="image/png">
		<link rel="stylesheet" href="/Skeleton-2.0.4/css/skeleton.css">
		<meta charset="utf-8">
		<meta name="description" content="Assignment 1.3.4. Select">
		<title>Select</title>
	</head>
	<body>
		<h2>User Login</h2>
		<form method="POST" action="./my_first_form.php">
	        <label for="username">Username</label>
	        <input id="username" name="username" type="text" placeholder="Username">
	        <label for="password">Password</label>
	        <input id="password" name="password" type="password" placeholder="Password"><br>
	        <button type="submit">Login</button>
		</form>

		<h2>Compose an Email</h2>
		<form method="POST" action="./my_first_form.php">
			<label for="To">To:</label>
			<input id="to" name="To" type="text">
			<label for="From">From:</label>
			<input id="from" name="From" type="text">
			<label for="Subject">Subject</label>
	        <input id="subject" name="Subject" type="text" placeholder="Subject">
	        <label for="Body">Body</label>
	        <input id="body" name="Body" type="text" placeholder="Body"><br>
	        <input name="saveCopy" type="checkbox" value="yes" checked>
	        <label for="saveCopy">Save a Copy to Your Sent Folder</label><br>
	        <button type="submit">Compose</button>
		</form>

		<h2>Multiple Choice Test</h2>
		<form method="POST" action="./my_first_form.php">
			<h3>What is the biggest city in Texas?</h3>
			<input type="radio" name="bigTexasCities" value="Houston">Houston
			<input type="radio" name="bigTexasCities" value="Dallas">Dallas
			<input type="radio" name="bigTexasCities" value="Austin">Austin
			<input type="radio" name="bigTexasCities" value="San Antonio">San Antonio

			<h3>What is the biggest city in the US?</h3>
			<input type="radio" name="bigUSCities" value="New York City">New York City
			<input type="radio" name="bigUSCities" value="Los Angeles">Los Angeles
			<input type="radio" name="bigUSCities" value="Chicago">Chicago
			<input type="radio" name="bigUSCities" value="Houston">Houston

			<h3>What is your favorite color</h3>
			<input type="checkbox" name="favColor" id="colorBlue" name="color[]" value="Blue">Blue
			<input type="checkbox" name="favColor" id="colorRed" name="color[]" value="Red">Red
			<input type="checkbox" name="favColor" id="colorGreen" name="color[]" value="Green">Green
			<input type="checkbox" name="favColor" id="colorYellow" name="color[]" value="Yellow">Yellow

			<label for="favDay">What are your favorite days of the week?</label>
			<select id="favDay" name="favDay[]" multiple>
				<option value="Monday">Monday</option>
				<option value="Saturday">Saturday</option>
				<option value="Friday">Friday</option>
				<option value="Sunday">Sunday</option>
			</select><br>
			<button type="submit">Submit</button>
		</form>

		<h2>Select Testing</h2>
		<form method="POST" action="./my_first_form.php">
			<label for="computerQuestion">Have you used a computer?</label>
			<select id="computerQuestion" name="computerQuestion">
				<option value="1">Yes</option>
				<option value="0" selected>No</option>
			</select><br>
			<button type="submit">Submit</button>
		</form>
	</body>
</html>