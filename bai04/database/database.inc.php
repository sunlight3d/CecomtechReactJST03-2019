<?php 
    $hostname = "localhost";
    $port = "3306";
    $databaseName = "abc12";
    $databaseUserName = "root";
    $databasePassword = "";
    $connection = mysqli_connect(
        $hostname,
        $databaseUserName,
        $databasePassword,
        $databaseName);
    if (mysqli_connect_errno()) {
        echo "<h2>Failed to connect to MySQL: " . mysqli_connect_error()."</h2>";
    } else {
        echo "<h2>Connect DB Successfully</h2>";
    }
?>