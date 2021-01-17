<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'SMTP.php';
//get post data
$data = [
    'email' => $_POST['email'],
    'message' => $_POST['message']
];
$mail = new PHPMailer(true);
try {
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'connect.bowen@gmail.com';
    $mail->Password = 'Contactbowen8';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('connect.bowen@gmail.com', 'Bowen');//pls do not log in my account, thx
//information of client
    $mail->addAddress('bowen8shen@gmail.com', 'Bowen');
    $mail->isHTML(true);
    //content of email
    $mail->Subject = 'Get message';
    $mail->Body = "Email: " . $data['email']."<br>Message: " . $data['message'] . "<br><br>--<br><br>Date: " . date("F j, Y") ."<br>Time: ". date("g:i a")."<br>Page URL: ".$_SERVER['SERVER_NAME']."<br>User Agent: ".$_SERVER['HTTP_USER_AGENT']."<br>Remote IP: ". $_SERVER['SERVER_ADDR'] ;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
