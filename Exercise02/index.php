<!DOCTYPE html>
<html>
<body>
<?php
// Constant
error_reporting(-1);
define("PI", 3.1416);
$test_string1 = sprintf('PI = %s', PI);
echo $test_string1;

$test_string2 = "<br>PI is : ".PI." !";
echo $test_string2;

$globalVar = 1;
$localVar = 1;
function functionA() {
	global $globalVar;
	$globalVar = 2;
	$localVar = 2;
}
functionA();
echo "<br>globalVar is : $globalVar";
echo "<br>localVar is : $localVar";
// Các biến môi trường
echo "<br><b>Các biến môi trường:</b>";
echo "<br>Server's name: ".$_SERVER['SERVER_NAME'];
echo "<br>Server's protocol: ".$_SERVER['SERVER_PROTOCOL'];
echo "<br>Server's software: ".$_SERVER['SERVER_SOFTWARE'];
echo "<br>Server's User-Agent: ".$_SERVER['HTTP_USER_AGENT'];
echo "<br>HTTP Accept: ".$_SERVER['HTTP_ACCEPT'];
echo "<br><b>Ví dụ về Cookie</b>";
//Một cookie có thể lưu nhiều cặp key-value
setcookie("name", "Hoang");
setcookie("createdAt", date('Y-m-d'));
if(isset($_COOKIE['name'])) {
	echo "<br>Cookie name: ".$_COOKIE['name'];
}
if(isset($_COOKIE['createdAt'])) {
	echo "<br>Cookie createdAt: ".$_COOKIE['createdAt'];
}

?>


</body>
</html>