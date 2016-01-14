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

  $('.filter-read').click(function() {
    var $cards = $links.children();
    $cards.sort(function(a, b) {
      var aCardRead = $(a).find(".read-status").text(),
          bCardRead = $(b).find(".read-status").text();
      if(aCardRead > bCardRead) {
    		return 1;
    	}
    	if(aCardRead < bCardRead) {
    		return -1;
    	}
    	return 0;
    });
    $cards.detach().appendTo($links);
  });

  $('.alphabetize').click(function() {
    var $cards = $links.children();
    console.log('WORKING');
    $cards.sort(function(a, b) {
      var aCardRead = $(a).find(".link-title").text(),
          bCardRead = $(b).find(".link-title").text();
      if(aCardRead < bCardRead) {
    		return 1;
    	}
    	if(aCardRead > bCardRead) {
    		return -1;
    	}
    	return 0;
    });
    $cards.detach().appendTo($links);
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
