<?php 
include_once "models/Person.php";
if (count($_POST) > 0) {
	$username = $_POST['username'];
	$password = $_POST['password'];
	$email = $_POST['email'];
	$age = $_POST['age'];
	$person = new Person($username, $email, $age, $password);
	// $person->name = $username;
	// $person->password = $password;
	// $person->age = $age;
	var_dump($person);
	echo "Name = ".$person->get_upper_name();
	$person->set_email("alooooo@gmail.cmn");
	echo "Email = ".$person->get_email();
}
 ?>