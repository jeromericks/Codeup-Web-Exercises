<!DOCTYPE html>
<html>
	<head>
		<link rel="shortcut icon" href="forms.png" type="image/png">
		<link rel="stylesheet" href="/Skeleton-2.0.4/css/skeleton.css">
		<meta charset="utf-8">
		<meta name="description" content="Forms Homework">
		<title>Forms Homework</title>
	</head>
	<body>
		<h1>GET</h1>
		<?php var_dump($_GET); ?>
		<h1>POST</h1>
		<?php var_dump($_POST); ?>

		<h2>Search</h2>
		<form method="GET" action="./forms.php">
			<input type="search" name="Search" placeholder="Search"><br>
			<button type="submit">Search</button>
		</form>

		<h2>Login Information</h2>
		<form method="POST" action="./forms.php">
	        <label for="Username">Username</label>
	        <input id="loginUsername" name="Username" type="text" placeholder="Username">
	        <label for="Password">Password</label>
	        <input id="loginPassword" name="Password" type="password" placeholder="Password"><br>
	        <button type="submit">Login</button>
		</form>

		<h2>Sign-up Form</h2>
		<form method="POST" action="./forms.php">
			<label for="Name">Name</label>
	        <input id="signupName" name="Name" type="text" placeholder="Name">
	        <label for="Email">Email</label>
	        <input id="signupEmail" name="Email" type="text" placeholder="Email">
	        <label for="Username">Username</label>
	        <input id="signupUsername" name="Username" type="text" placeholder="Username">
	        <label for="Password">Password</label>
	        <input id="signupPassword" name="Password" type="password" placeholder="Password"><br>
	        <button type="submit">Sign-up</button>
		</form>

		<h2>Contact Me</h2>
		<form method="POST" action="./forms.php">
			<label for="Address">Address</label>
	        <input id="address" name="Address" type="text" placeholder="Address">
	        <label for="Subject">Subject</label>
	        <input id="subject" name="Subject" type="text" placeholder="Subject">
	        <label for="Body">Body</label>
	        <input id="body" name="Body" type="text" placeholder="Body"><br>
	        <button type="submit">Contact Me</button>
		</form>
	</body>
</html>