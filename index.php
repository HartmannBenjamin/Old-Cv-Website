<?php

//Premiere Connexion
if(!isset($_COOKIE["lang"])) {
  $dataArray = json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$_SERVER['REMOTE_ADDR']));
  //si User est français
  if($dataArray->geoplugin_countryCode == "FR") {
    setcookie("lang", 'fr');
  } else {
    setcookie("lang", 'en');
  }
}

include('header.html');

print '<div style="position: relative">
  <div id="main-section" style="position: absolute; top: -70px; left: 0"></div>
</div>';

if($_COOKIE["alert_email"] == "1") {
  include('alert_mail.php');
}

include('main.html');

include('portfolio.html');

include('about.html');

include('contact.html');

include('footer.html');

print '</body>';
print '</html>';

?>
