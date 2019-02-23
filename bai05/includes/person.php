<?php

class Person {
	public $name = "";
	public $first_name = "";
	public $last_name = "";
	protected $email = "";

	public function get_email(){
		return $this->email;
	}
	public function set_email($new_email) {
		$this->email = $new_email;
	}
	public function get_fullname(){
		return $this->first_name." ".$this->last_name;
	}
}

?>
