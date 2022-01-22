<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6Ldux-IUAAAAAMjN8nv6Q8qlzfkygwujmGr7eLn_';
    $recaptcha_response = $_POST['recaptcha_response'];
    $ip = $_SERVER['REMOTE_ADDR'];

    $recaptcha = file_get_contents($recaptcha_url."?secret=".$recaptcha_secret."&response=".$recaptcha_response."&remoteip=".$ip);
    $recaptcha = json_decode($recaptcha, true);


    if ($recaptcha['score']) {

    function validData($data){
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

      $from = validData($_REQUEST['email']);
      $name = validData($_REQUEST['name']);
      $subject = validData($_REQUEST['subject']);
      $cmessage = validData($_REQUEST['message']);
      $error = "";


      if(empty($from) || ! filter_var($from, FILTER_VALIDATE_EMAIL) ) {
        $error .= "wrong mail address ";
      }

      if(empty($name) || strlen($name) > 30) {
        $error .= "wrong name ";
      }

      if(empty($subject) || strlen($subject) > 30) {
        $error .= "wrong subject ";
      }

      if(empty($cmessage) || strlen($cmessage) > 3000) {
        $error .= "wrong message ";
      }

      $to = "benjamin.hartmann@viacesi.fr";
      $headers = "From: " . $from;

      if($error != "") {
        setcookie('error_email', $error, time()+3600);
      } else {
        setcookie('error_email', '', time()+3600);
        mail('benjaminhartmann.contact@gmail.com', $subject, " Name : $name\n Mail : $from\n Message : $cmessage", "From: ton_nom <ton@mail.com>\n");
      }


    } else {
        $error = "Are you a Bot ? ";
        setcookie('error_email', $error, time()+3600);
    }
}
  setcookie('alert_email', 1, time()+3600);

  header('Location: http://benjaminhartmann.fr');

?>
