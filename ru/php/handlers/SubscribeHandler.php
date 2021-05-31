<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../../../vendor/autoload.php';
include '../../../envpath.php';

$path = getcwd();
echo $path;
$dotenv = Dotenv\Dotenv::createImmutable($envpath);
$dotenv->safeLoad();


$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->SMTPSecure = 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 465;
$mail->Username = $_ENV['SENDER_EMAIL'];
$mail->Password = $_ENV['SENDER_PASSWORD'];
$mail->SMTPKeepAlive = true;
$mail->SMTPAuth = true;

$mail->setFrom('support@blackshield.capital', 'BlackShield Capital');
$mail->Subject = 'Новая подписка';

$receiver = ['email' => $_ENV['RECEIVER_EMAIL'], 'name' => 'BlackShield Capital'];

$mail->addAddress($receiver['email'], $receiver['name']);

if (isset($_POST['email'])) {
  $mail->Body = "<p>Почта: {$_POST['email']}</p>";
        $mail->AltBody = "Почта: $_POST[email]";
        echo json_encode(array('success' => true));
        $mail->send();
} else {
  echo json_encode(array('success' => false));
}

$mail->clearAddresses();


$mail->smtpClose();
?>


