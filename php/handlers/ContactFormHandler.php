<?php
if (isset($_POST['name']) && isset($_POST['company']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['country'])) {
    $to = 'info@blackshield.fund';
    $from = "support@blackshield.capital";
    $subject = 'Новый пользователь';
    $message = "
        Имя: $_POST[name]
        Компания: $_POST[company]
        Почта: $_POST[email]
        Телефон: $_POST[phone]
        Страна: $_POST[country]
        ";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    mail($to, $subject, $message, $headers);
}
?>