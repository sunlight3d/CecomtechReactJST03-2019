<!DOCTYPE html>
<html>
<body>
<h1>Login form</h1>
<form method="POST" action="includes/login.inc.php">
    UserName:<input type="text" name="UserName">
    <br>
    Password:<input type="password" name="Password">
    <button type="submit" name="submit">Login</button>
</form>
<?php
if (isset($_GET['login_result'])) {
        $login_result = $_GET['login_result'];
        switch ($login_result) {
            case 'empty':
                echo "You must enter input information";
                break;
            case 'success':
                echo "Login successful";
                break;
            case 'user_not_found':
                echo "User not found";
                break;
            case 'wrong_password':
                echo "Wrong password";
                break;
            case 'error':
                echo "Login to DB error";
                break;
            default:
                echo "Default:";
                break;
        }
    }

?>

</body>
</html>