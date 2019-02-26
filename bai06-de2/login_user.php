<?php 
include('database/database.php');
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Login user</title>
</head>
<body>
	<h3>Registration form</h3>
	<form method="POST">
		<table>
			<tr>
				<td>User name:<input type="text" name="UserName"></td>
			</tr>
			<tr>
				<td>Password:<input type="password" name="Password"></td>
			</tr>
		</table>
		<button type="submit" name="submit">Registration</button>
	</form>
<?php  
//$_POST = super global
if(isset($_POST["submit"])) {
	$username = $_POST["UserName"];
	$password = $_POST["Password"];
	$phone_number = $_POST["PhoneNumber"];
	if(empty($username) 
		|| empty($password) 
		|| empty($phone_number)){
		echo "<h1>You must input name, pass, phone</h1>";
		exit();
	} 
	$username = mysqli_real_escape_string($connection, $username);
	$sql = "SELECT * FROM abc12users WHERE UserName='".$username."'";
	$result = mysqli_query($connection, $sql);
	if(mysqli_num_rows($result) > 0) {
		echo "User exists";
	} else {
		//Encrypt password to HEX
		$password = hash('sha256',$password);
		print_r($password);
		//Register user
		$sql = "INSERT INTO abc12users(UserName, PasswordHash, Phone)".
			"VALUES('".$username."','".$password."','".$phone_number."')";
		$result = mysqli_query($connection, $sql);
		if($result) {
			echo "<h3>Register successfully</h3>";
			echo "<h3>Username: ".$username.".Phone: ".$phone_number."</h3>";
		} else {
			echo "<h3>Register failed</h3>";
		}
	}
}
?>
</body>
</html>