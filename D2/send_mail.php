<?php

require 'vendor/autoload.php';
include 'config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$html = file_get_contents('template/inlined_template.html');

$mail = new PHPMailer(true);
try {    
    //Server settings            
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'campingasturias@gmail.com';
    $mail->Password = '12345Camping';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom($email, 'Unkown');
    $mail->addAddress($email, $name);

    //Attachments
    //$mail->addAttachment('./invoices/invoice'.$invid.'.pdf');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Test email';
    $mail->Body    = $html;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}