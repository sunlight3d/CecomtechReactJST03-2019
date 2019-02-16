<?php 
error_reporting(0);
$firstname = $_GET["firstname"];

$lastname = $_GET["lastname"];
$address = $_GET["address"];
$contactNo = $_GET["contactNo"];
echo "<h2>Your personal details:</h2>";
echo "Firstname: $firstname<br>";
echo "Lastname: $lastname<br>";
echo "<h1>Address: ".$address."</h1>";
echo "Contact No: $contactNo<br>";
?>