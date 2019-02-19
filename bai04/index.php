<!DOCTYPE html>
<html>
<body>
<h1>Registration form</h1>
<form method="POST">
    UserName:<input type="text" name="UserName">
    <br>
    Password:<input type="password" name="Password">
    <br>
    Phone:<input type="text" name="Phone">
    <br>
    <button type="submit" name="submit">Register User</button>
</form>
<?php
include_once('./database/database.inc.php');
include_once('./database/controllers.inc.php');

if(isset($_POST['submit'])) {
    echo "<h2>Bam dang ky</h2>";
    //$connection;
    registerUser();
}
?>

</body>
</html>