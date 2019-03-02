<!-- http://localhost:80/bai06-de2/reset_password.php -->
<?php 
include('database/database.php');
 ?>
<!DOCTYPE html>
<html>
<head>
	<title>Reset Password Form</title>
</head>
<body>
	<h3>Reset Password Form</h3>
	<form method="POST">
		<table>
			<tr>
				<td>User name:<input type="text" name="UserName"></td>
			</tr>
			<tr>
				<td>Phone Number:<input type="text" name="Phone"></td>
			</tr>
		</table>
		<button type="submit" name="submit">Reset</button>
	</form>
<?php  
//$_POST = super global
if(isset($_POST["submit"])) {
	$username = $_POST["UserName"];
	$phone = $_POST["Phone"];
	if(empty($username) or empty($phone)){
		echo "<h1>You must input name, phone</h1>";
		exit();
	} 
	$username = mysqli_real_escape_string($connection, $username);
	$sql = "SELECT * FROM abc12users WHERE UserName='".$username."' AND Phone='".$phone."'";
	$result = mysqli_query($connection, $sql);
	if(mysqli_num_rows($result) > 0) {
		//Login
		while($row=mysqli_fetch_assoc($result)) {
			//Generate password
			$generated_password = str_shuffle("123abc");
			echo "<h1>New password is : ".$generated_password."</h1>";
		}
	} else {
		echo "<h1>Incorrect user information</h1>";
	}
}
?>
</body>
</html>