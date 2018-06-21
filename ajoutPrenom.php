<?php
  //handle
  $f = fopen('prenom.txt', 'a'); //on ouvre le fichier et on vérifie s'il existe
  fwrite($f,$_POST['prenom']);//on écrit dans le fichier
  fclose($f);//on ferme le fichier

  $read = file_get_contents('prenom.txt');//je recupère le contenu du fichier prenom.txt dans une variable
  echo $read;//je l'affiche
  print_r($_POST);
?>