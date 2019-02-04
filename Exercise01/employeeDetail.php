<?php 
error_reporting(0);
$employeeId = $_POST["employeeId"];
$name = $_POST["name"];
$department = $_POST["department"];
$age = $_POST["age"];
echo "Your employee details:";
echo "<br><br>";
echo "EmployeeId: $employeeId<br>";
echo "Name: $name";
echo "Department: $department<br>";
echo "Email: $email<br>";
echo "Age(hidden): $age<br>";
?>