<?php 
//http://localhost:80/bai05/
include_once './includes/person.php';
include_once './includes/student.php';

$person1 = new Person();
$person1->name = "Hoang";
//$person1->email = "hoang123@gmail.com";
$person1->set_email('hoang123@gmail.com');
$person1->first_name = "Nguyen";
$person1->last_name = "Duc Hoang";
echo "Email = ".$person1->get_email();
echo "Fullname = ".$person1->get_fullname();
//Khoi tao doi tuong student
$student1 = new Student();
$student1->say_hello("Chao cac ban");
var_dump($student1);
echo '<br><br><br>';
$persons = array("Hello", 20);
array_push($persons , $person1, $student1);
var_dump($persons);
echo '<h1>Iterate an array : </h1>';
foreach ($persons as $each_person) {
	var_dump($each_person);echo '<br>';
}
?>