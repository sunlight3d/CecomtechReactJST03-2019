<?php 
include_once('../database/database.inc.php');

if(isset($_POST['submit'])) {
    echo "<h2>Bam dang ky</h2>";
    $user_name = mysqli_real_escape_string($connection, $_POST['UserName']);
    $password = mysqli_real_escape_string($connection, $_POST['Password']);
    $phone = mysqli_real_escape_string($connection, $_POST['Phone']);
    //insert
    if(empty($user_name)||empty($password)||empty($phone)) {
        //echo "You must enter input information";
        header('Location: ../index.php?register_result=empty');
        exit();
    }
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO ab12users(UserName,PasswordHash,Phone) 
            VALUES ('$user_name', '$hashed_password', '$phone')";
    if(mysqli_query($connection, $sql)){
        // echo "Records added successfully.";
        header('Location: ../index.php?register_result=success');
    } else{
        //echo "ERROR: Could not able to execute $sql.". mysqli_error($connection);
        header('Location: ../index.php?register_result=error');
        exit();
    }   
}
?>