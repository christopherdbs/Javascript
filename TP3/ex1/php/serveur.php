<?php
$message = $_POST['message'];
header('content-Type : application/json');
usleep(mt_rand(100000,500000));
//echo file_get_contents("php://input");
echo $message;
?>
