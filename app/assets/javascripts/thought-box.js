$(document).ready(function(){
  var $links = $('#links');
  loadIdeas($links);
  $('#idea-save').on('click', function(){
    createIdea($links, this);
  });

  $('#search').keyup(function() {
    var $cards = $links.children();
    var searchValue = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

    $cards.show().filter(function() {
        var cardText = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~cardText.indexOf(searchValue);
    }).hide();
  });

  $links.on('click', '.delete-button', function(){
    deleteIdea(this);
  });

  $links.on('click', '.edit-idea', function(){
    editWindow(this);
  });

  $links.on('click', '.edit-update', function(){
    editIdea(this);
  });

  $links.on('click', '.downgrade', function(){
    downgradeIdea(this);
  });

  $links.on('click', '.upgrade', function(){
    upgradeIdea(this);
  });

  $links.on('click', '.expand-toggle', function(){
    toggleFullBody(this);
  });
});
