<!DOCTYPE html>
<html>
<head>
	<title></title>
	<form method="GET">
		<input type="text" name="a">
        <input type="text" name="b">
        <br>
        <select name="operator" id="">
            <option value="Cong">Cong</option>
            <option value="Tru">Tru</option>
            <option value="Nhan">Nhan</option>
            <option value="Chia">Chia</option>
            <option value="Pow">Pow</option>
        </select>
        <button type="submit" name="submit">Calculate</button>
	</form>
</head>
<body>
<?php 
echo "<p>Tong la: </p>";
if(isset($_GET['submit'])) {
    $a = $_GET['a'];
    $b = $_GET['b'];
    $operator = $_GET['operator'];
    switch ($operator) {
    	case 'Cong':
    		$sum = $a + $b;
    		break;
    	case 'Tru':
    		$sum = $a - $b;
    		break;
    	case 'Nhan':
    		$sum = $a * $b;
    		break;
    	case 'Chia':
    		$sum = $a / $b;
    		break;
    	case 'Pow':
    		$sum = $a ** $b;
    		break;
    	default:
    		$sum = 0;
    		break;
    }
    
    echo $sum;
    echo "<h3>So sanh</h3>";
    $x = "10";
    $y = 10;
    if($x != $y) {
    	echo "BAng nhau";
    } else {
    	echo "KO BAng nhau";
    }
    $names = array("Hoang", "Hoang2");
    echo "<br>".$names['0'];
    $i = 0;
    /*
    $i = $i + 1;
    echo $i;
	*/
    echo ++$i;
    $i=0;
    do {
    	echo "</br>i = $i";
    	$i++;
    }
    while($i > 8);
    for($j = 0;$j<10;$j++) {
    	echo "</br>j = $j";
    }
}   
?>
</body>
</html>