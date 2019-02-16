<!DOCTYPE html>
<html>
<body>
<?php
// Constant
error_reporting(-1);
$n = $_GET["n"];
$odds = array();//lẻ
$evens = array();//chẵn
for($i = 1; $i <=$n; $i++){
	if($i % 2 == 0) {
		array_push($evens, $i);
	} else {
		array_push($odds, $i);
	}
}
echo "<br>odds: ".implode(",",$odds);
echo "<br>evens: ".implode(",",$evens);
?>


</body>
</html>