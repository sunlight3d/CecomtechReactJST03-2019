<?php 
include_once 'person.php';

class Student extends Person {
	public $student_id = "";
	public function say_hello($hello) {
		$this->email = "abc@gmail.com";//protected
		return "I say : ".$hello;
	}
	public function to_string() {
		echo "Email = ".$this->email."StudentId = ".$this->student_id;
	}
}
 ?>