$(document).ready(function () {

  $('#activeAjax').click(function () {
    $.ajax({
      method: "GET",//méthode utilisée
      url: "recup.txt",//depuis quel fichier proviennent les informations à afficher
      dataType: "text",

      error: function (info, status) {
        $('#displayContent')
          .text('Erreur de requête')
          .attr('class', 'red');
      },
      success: function (info, status) {
        $('#displayContent')
          .text('Succès')
          .attr('class', 'green');
      },
      complete: function (info, status) {
        $('#displayContent')
          .text(info.responseText)
          .attr('class', 'blue');
        if (status == 'success') {
          $('#displayContent')
            .css('position', 'absolute')
            .animate({
              top: '150px'
            }, 1800);
        } else {
          $('#displayContent').html('<img src="img/ajax-loader-gif-13.gif" alt="loading." width=150px; height=150px;/>')
        };
      }
    });
  });
});