<!DOCTYPE html>
<html>
<body>
<h1>Registration form</h1>
<form method="POST" action="includes/register.inc.php">
    UserName:<input type="text" name="UserName">
    <br>
    Password:<input type="password" name="Password">
    <br>
    Phone:<input type="text" name="Phone">
    <br>
    <button type="submit" name="submit">Register User</button>
</form>
<?php
if (isset($_GET['register_result'])) {
        $register_result = $_GET['register_result'];
        switch ($register_result) {
            case 'empty':
                echo "You must enter input information";
                break;
            case 'success':
                echo "Register success";
                break;
            case 'error':
                echo "Error inserting to DB";
                break;
            default:
                echo "Default:";
                break;
        }
    }
    
?>

</body>
</html>