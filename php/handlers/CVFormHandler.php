<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_FILES['file']) && isset($_FILES['type'])) {
    $to = "info@blackshield.fund";
    $from = "support@blackshield.capital";
    $subject = "Новое CV! ".$_POST['type'].;
    $message = "Имя пользователя: ".$_POST['name']."\nEmail пользователя ".$_POST['email']."\nТелефон пользователя ".$_POST['phone'];

    $boundary = md5(date('r', time()));
    $filesize = '';
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
    $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"

--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit

$message";
    if(is_uploaded_file($_FILES['file']['tmp_name'])) {
        $attachment = chunk_split(base64_encode(file_get_contents($_FILES['file']['tmp_name'])));
        $filename = $_FILES['file']['name'];
        $filetype = $_FILES['file']['type'];
        $filesize = $_FILES['file']['size'];
        $message.="

--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"

$attachment";
    }
    $message.="
--$boundary--";

    if ($filesize < 10000000) {
        mail($to, $subject, $message, $headers);
    }
}
?>

