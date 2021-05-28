<?php
use PHPMailer\PHPMailer\PHPMailer;
require '../../../vendor/autoload.php';
include '../../../envpath.php';

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
$mail->Subject = 'Новое CV! '.$_POST['type'];

$receiver = ['email' => $_ENV['RECEIVER_EMAIL'], 'name' => 'BlackShield Capital'];


$mail->addAddress($receiver['email'], $receiver['name']);

if (array_key_exists('file', $_FILES)) {
  if ($_FILES['file']['size'] < 4000000) {
  $ext = PHPMailer::mb_pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
      $uploadfile = tempnam(sys_get_temp_dir(), hash('sha256', $_FILES['file']['name'])) . '.' . $ext;
      move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
      $mail->addAttachment($uploadfile, $_FILES['file']['name']);

      $mail->Body = "<p>Имя: {$_POST['name']}</p><p>Фамилия: {$_POST['surname']}</p><p>Email пользователя: {$_POST['email']}</p><p>Телефон пользователя: {$_POST['phone']}</p>";
      $mail->AltBody = "New email! \n With CV attachment";
      $mail->AltBody = "Имя: ".$_POST['name']."\nФамилия: ".$_POST['surname']."\nEmail пользователя ".$_POST['email']."\nТелефон пользователя ".$_POST['phone'];
      echo json_encode(array('success' => true));
      $mail->send();
  } else {
    echo json_encode(array('success' => 'large_file'));
  }
} else {
  echo json_encode(array('success' => false));
}

$mail->clearAddresses();


$mail->smtpClose();
?>
