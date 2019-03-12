<?php 
if (isset($_GET['username'])) {
	$username = $_GET['username'];
	$email = $_GET['email'];
	//Name must start with H
	preg_match_all("/^H.*/", $username, $array_result);
	// if(count($array_result[0]) === 0) {
	if(!preg_match("/^H.*/",$username)) {
		echo "<h2 style='color: red;'>Name must start with H</h2>";	
	}
	if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo "<h2 style='color: red;'>Invalid email</h2>";	
		return;
	}
	echo '<h2>Hello '.$username.".Email: ".$email."</h2>";
}
 ?>