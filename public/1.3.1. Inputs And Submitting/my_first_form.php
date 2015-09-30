<?php
  var_dump($_GET);
  var_dump($_POST);
?>

<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="forms.png" type="image/png">
		<link rel="stylesheet" href="/Skeleton-2.0.4/css/skeleton.css">
		<meta charset="utf-8">
		<meta name="description" content="Assignment 1.3. Forms I">
		<title>My First HTML Form</title>
	</head>
	<body>
		<form method="POST" action="./my_first_form.php">
	        <label for="username">Username</label>
	        <input id="username" name="username" type="text" placeholder="Username">
	        <label for="password">Password</label>
	        <input id="password" name="password" type="password" placeholder="Password"><br>
	        <button type="submit">Login</button>
		</form>
	</body>
</html>