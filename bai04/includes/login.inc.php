<?php 
include_once('../database/database.inc.php');

if(isset($_POST['submit'])) {
    echo "<h2>Bam dang nhap</h2>";
    $user_name = mysqli_real_escape_string($connection, $_POST['UserName']);
    $password = mysqli_real_escape_string($connection, $_POST['Password']);
    if(empty($user_name)||empty($password)) {
        //echo "You must enter input information";
        header('Location: ../login.php?login_result=empty');
        exit();
    }
    
    $sql = "SELECT * FROM ab12users WHERE UserName = '$user_name'";
    $sql_result = mysqli_query($connection, $sql);

    if(mysqli_num_rows($sql_result) > 0){
        
        while($row = mysqli_fetch_assoc($sql_result)) {
            if(password_verify($password, $row['PasswordHash'])) {
                header('Location: ../login.php?login_result=success');
                exit();
            } 
    
        }
        
        header('Location: ../login.php?login_result=wrong_password');
        exit();
    } else{
        header('Location: ../login.php?login_result=user_not_found');
        exit();
    }       
}
?>