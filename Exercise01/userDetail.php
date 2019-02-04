<?php 
error_reporting(0);
$firstname = $_GET["firstname"];
$lastname = $_GET["lastname"];
$address = $_GET["address"];
$contactNo = $_GET["contactNo"];
echo "Your personal details:"
echo "<br><br>";
echo "Firstname: $firstname";
echo "Lastname: $lastname";
echo "Address: $address";
echo "Contact No: $contactNo";
?>