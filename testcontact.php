<?php 

	/* ==========================  Define variables ========================== */

	#Your e-mail address
	define("__TO__", "alice@digitalarmoury.co.nz");

	#Message subject
	define("__SUBJECT__", "");

	#Success message
	define('__SUCCESS_MESSAGE__', "Your message has been sent. Thank you!");

	#Error message 
	define('__ERROR_MESSAGE__', "Error, your message hasn't been sent");

	#Messege when one or more fields are empty
	define('__MESSAGE_EMPTY_FILDS__', "Please fill out all fields");

	/* ========================  End Define variables ======================== */

	//Send mail function
	function send_mail($to,$subject,$message,$headers){
		if(@mail($to,$subject,$message,$headers)){
			echo json_encode(array('info' => 'success', 'msg' => __SUCCESS_MESSAGE__));
		} else {
			echo json_encode(array('info' => 'error', 'msg' => __ERROR_MESSAGE__));
		}
	}

	//Check e-mail validation
	function check_email($email){
		if(!@eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
			return false;
		} else {
			return true;
		}
	}

	//Get post data
	if(isset($_POST['name']) and isset($_POST['mail']) and isset($_POST['phone']) and isset($_POST['business'])){
		$name 	 = $_POST['name'];
		$mail 	 = $_POST['mail'];
		//$phone 	 = $_POST['phone'];
		$message = $_POST['business'];

		if($name == '') {
			echo json_encode(array('info' => 'error', 'msg' => "Enter your name."));
			exit();
		} else if($mail == '' or check_email($mail) == false){
			echo json_encode(array('info' => 'error', 'msg' => "Enter valid e-mail."));
			exit();
		} else if($phone == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Enter your phone number."));
			exit();

		} else if($business == ''){
			echo json_encode(array('info' => 'error', 'msg' => "Enter your business."));
			exit();
		} else {
			//Send Mail
			$to = __TO__;
			$subject = __SUBJECT__ . ' ' . $name;
			$message = '
			<html>
			<head>
			  <title>Mail from '. $name .'</title>
			</head>
			<body>
			  <table class="table">
				<tr>
				  <th align="right">Name:</th>
				  <td align="left">'. $name .'</td>
				</tr>
				<tr>
				  <th align="right">E-mail:</th>
				  <td align="left">'. $mail .'</td>
				</tr>
				<tr>
				  <th align="right">Phone:</th>
				  <td align="left">'. $phone .'</td>
				</tr>
				<tr>
				  <th align="right">Business:</th>
				  <td align="left">'. $business .'</td>
				</tr>
			  </table>
			</body>
			</html>
			';

			$headers  = 'MIME-Version: 1.0' . "\r\n";
			$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
			$headers .= 'From: ' . $mail . "\r\n";

			send_mail($to,$subject,$message,$headers);
		}
	} else {
		echo json_encode(array('info' => 'error', 'msg' => __MESSAGE_EMPTY_FILDS__));
	}
 ?>