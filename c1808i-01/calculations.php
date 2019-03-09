<?php
//This is a module
function changeA() {
    global $a;
    $a = 12;
}
function sum ($x, $y) {
    return $x + $y;
}
function get_even_number($numbers) {
    for($i = 0; $i<count($numbers); $i++) {
        if($numbers[$i]%2 === 0) {
            echo "number =".$numbers[$i];
        }
    }
}

?>