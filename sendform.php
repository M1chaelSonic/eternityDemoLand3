<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['mail'];

$token = "6461183436:AAFHUS8KejIglvtLTyRPx2HcLabKVTK97gA";
$chat_id = "-902761503";

$arr = array(
  
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>