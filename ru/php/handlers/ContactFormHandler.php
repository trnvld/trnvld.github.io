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
$mail->Subject = 'Новый контакт';

$receiver = ['email' => $_ENV['RECEIVER_EMAIL'], 'name' => 'BlackShield Capital'];


$mail->addAddress($receiver['email'], $receiver['name']);

if (isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['company']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['country'])) {
  $mail->Body = "<p>Имя: {$_POST['name']}</p><p>Фамилия: {$_POST['surname']}</p><p>Компания: {$_POST['company']}</p><p>Почта: {$_POST['email']}</p><p>Телефон: {$_POST['phone']}</p><p>Страна: {$_POST['country']}</p>";
        $mail->AltBody = "Имя: $_POST[name] \n Фамилия: $_POST[surname] \n Компания: $_POST[company] \n Почта: $_POST[email] \n Телефон: $_POST[phone] \n Страна: $_POST[country]";
        echo json_encode(array('success' => true));
        $mail->send();
} else {
  echo json_encode(array('success' => false));
}

$mail->clearAddresses();


$mail->smtpClose();
?>

