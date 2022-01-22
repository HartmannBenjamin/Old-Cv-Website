<?php
$error = $_COOKIE["error_email"];

if (!isset($error)) {
  print '<div class="alert alert-primary alert-dismissible fade show" role="alert">';
    print '<button onclick="deleteCookie()" type="button" class="close alert_button" data-dismiss="alert" aria-label="Close">';
      print '<span aria-hidden="true">&times;</span>';
    print '</button>';
    print '<p class="alert_message lang" key="mailMessage"></p>';
  print '</div>';
} else {
  print '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
    print '<button onclick="deleteCookie()" type="button" class="close alert_button" data-dismiss="alert" aria-label="Close">';
      print '<span aria-hidden="true">&times;</span>';
    print '</button>';
    print '<p class="alert_message">[Mail Error : ' . $error .']</p>';
  print '</div>';
}

?>
