<?php 
include_once('database.inc.php');
function registerUser() {
    global $connection;
    $user_name = mysqli_real_escape_string($connection, $_POST['UserName']);
    $password = mysqli_real_escape_string($connection, $_POST['Password']);
    $phone = mysqli_real_escape_string($connection, $_POST['Phone']);
    //insert
    $sql = "INSERT INTO ab12users(UserName,PasswordHash,Phone) 
            VALUES ('$user_name', '$password', '$phone')";
    if(mysqli_query($connection, $sql)){
        echo "Records added successfully.";
    } else{
        echo "ERROR: Could not able to execute $sql. 
        ". mysqli_error($connection);
    }
}

?>