<!-- http://localhost:80/bai06-de2/change_password.php -->
<?php 
include('database/database.php');
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Change password</title>
</head>
<body>
	<h3>Change password Form</h3>
	<form method="POST">
		<table>
			<tr>
				<td>User name:<input type="text" name="UserName"></td>
			</tr>
			<tr>
				<td>Password:<input type="password" name="Password"></td>
			</tr>
			<tr>
				<td>New Password:<input type="password" 
					name="NewPassword"></td>
			</tr>
		</table>
		<button type="submit" name="submit">Change password</button>
	</form>
<?php  
//$_POST = super global
if(isset($_POST["submit"])) {
	$username = $_POST["UserName"];
	$password = $_POST["Password"];
	$new_password = $_POST["NewPassword"];
	if(empty($username) or empty($password)){
		echo "<h1>You must input name, pass</h1>";
		exit();
	} 
	if($password == $new_password){
		echo "<h1>New password is the same as old password</h1>";
		exit();
	} 
	$password_hash = sha1($password);
	$new_password_hash = sha1($new_password);
	$username = mysqli_real_escape_string($connection, $username);
	$sql = "UPDATE abc12users SET PasswordHash='".$new_password_hash."' WHERE UserName='".$username."' AND PasswordHash = '".$password_hash."'";
	print_r($sql);
	// exit();
	$result = mysqli_query($connection, $sql);
	if(!mysqli_connect_errno()) {
		echo "<h1>Change password successfully</h1>";
	} else {
		echo "<h1>Cannot find user</h1>";
	}
}
?>
</body>
</html>