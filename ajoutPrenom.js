$(document).ready(function () {
  'use strict'
  $('#submit').on('click', function (e) {
    e.preventDefault();
    $.post(
      'ajoutPrenom.php', //fichier cible côté serveur
      {
        //données à envoyer
        prenom: $('#prenom').val()
      },
      function (info, status) {
        /*
        info: contenu du fichier traitement
        status: error ou success
        */
        if (status == 'success') {
          $('#result')
            .css('background', 'green')
            .text(info);
        } else {
          $('#result')
            .css('background', 'red')
            .text('Erreur lors de la récupération');
        }
      }
    )
  });
});