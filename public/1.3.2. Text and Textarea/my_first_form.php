<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="text.png" type="image/png">
		<link rel="stylesheet" href="/Skeleton-2.0.4/css/skeleton.css">
		<meta charset="utf-8">
		<meta name="description" content="Assignment 1.3.2. Text and Textarea">
		<title>Text and Textarea</title>
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
	        <button type="submit">Compose</button>
		</form>
	</body>
</html>