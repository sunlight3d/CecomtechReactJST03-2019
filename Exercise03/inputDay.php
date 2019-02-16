<!DOCTYPE html>
<html>
<body>
<?php
// Constant
error_reporting(-1);
$day = $_GET["day"];
$stringDay = "";
switch ($day) {
    case 1:
        $stringDay = "Sunday";
        break;
    case 2:
        $stringDay = "Monday";
        break;
    case 3:
        $stringDay = "Tuesday";
        break;
    case 4:
        $stringDay = "Wednesday";
        break;
    case 5:
        $stringDay = "Thursday";
        break;
    case 6:
        $stringDay = "Friday";
        break;
    case 7:
        $stringDay = "Saturday";
        break;
    default:
        $stringDay = "undefined";
}
echo "Today is: ".$stringDay;
?>

</body>
</html>