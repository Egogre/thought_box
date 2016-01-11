$(document).ready(function(){
  var $links = $('#links');
  loadLinks($links);
  $('#link-save').on('click', function(){
    createLink($links, this);
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
    deleteLink(this);
  });

  $links.on('click', '.edit-link', function(){
    editWindow(this);
  });

  $links.on('click', '.edit-update', function(){
    editLink(this);
  });

  $links.on('click', '.read', function(){
    markAsReadLink(this);
  });

  $links.on('click', '.upgrade', function(){
    upgradeLink(this);
  });

  $links.on('click', '.expand-toggle', function(){
    toggleFullBody(this);
  });
});
