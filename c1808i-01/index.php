<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<h1>Hello</h1>
<body>
<?php
//http://localhost:80/c1808i-01/index.php
$x = "Daniel";
$y = &$x;
$x = "Hoang";
echo "Hello ".$x." !";
echo "Hello ".strtoupper($y)." !";
$random_string = uniqid("", true);
echo $random_string;
#function
include 'calculations.php';
$z = sum(10, 20);
print_r("<br>".$z);//print result
$a = 10;

changeA();
echo "<h1>a = ".$a."</h1>";
$numbers = [1, 4,5 ,7,8,9,22,44,11];
get_even_number($numbers);
$j = 1;
echo "<h2>j=".(++$j)."</h2>";
?>
</body>
</html>

