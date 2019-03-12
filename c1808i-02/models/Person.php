<?php 
class Person {
	private $name =""; //Encapsulation
	private $email = "";
	private $age = 18;
	private $password ="";
	public function get_upper_name() {
		return strtoupper($this->name);
	}
	public function __construct($name, $email, $age, $password) {
		$this->name = $name;
		$this->email = $email;
		$this->age = $age;
		$this->password = $password;

	}
	//Getter
	public function get_email() {
		return  $this->email;
	}
	//Setter
	public function set_email($new_email) {
		$this->email = $new_email;
	}
}
 ?>
