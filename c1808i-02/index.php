
<!DOCTYPE html>
<html>
<head>
	<title>This is a Login form</title>
</head>
<?php 
include "loginForm.php";
include "sayHello.php";
include_once "./models/Person.php";
// http://localhost:80/c1808i-02/index.php
//http://localhost:80//c1808i-02/index.php?username=Hoang&email=aaa@fmail.com
 ?>
<body>
	<form action="loginForm.php" method="POST">
		<table>
			<tr>
				<td>Username: </td>
				<td><input type="text" name="username"></td>
			</tr>
			<tr>
				<td>Password: </td>
				<td><input type="password" name="password"></td>
			</tr>
			<tr>
				<td>Age: </td>
				<td><input type="text" name="age"></td>
			</tr>
			<tr>
				<td>Email: </td>
				<td><input type="email" name="email"></td>
			</tr>
		</table>
		<button type="submit" value="submit">
			Login
		</button>		
		
	</form>
	<form action="sayHello.php" method="GET">
		<table>
			<tr>
				<td>Username: </td>
				<td><input type="text" name="username"></td>
			</tr>
			<tr>
				<td>Email: </td>
				<td><input type="text" name="email"></td>
			</tr>
		</table>
		<button type="submit" value="submit2">
			Say Hello
		</button>		
		
	</form>
<?php 

?>
</body>
</html>
