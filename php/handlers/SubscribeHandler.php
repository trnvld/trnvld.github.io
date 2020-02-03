<?php
if (isset($_POST['email'])) {
    $to = 'edudukin2@gmail.com';
    $from = "support@blackshield.capital";
    $subject = 'Новая подписка';
    $message = "Почта: $_POST[email]";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    
    mail($to, $subject, $message, $headers);
}
?>