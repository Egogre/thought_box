function loadLinks($links) {
  $.ajax({
    type: 'GET',
    url:  '/api/v1/links',
    success: function(response){
      var $renderedLinks = response.map(buildLinkElement).reverse();
      $links.html($renderedLinks);
    }
  });
}

function buildLinkElement(link) {
  return $('<div id="'
         + link.id
         + '" class="link'
         + link.id
         + '"><div id ="card1" class="card text-center"><h1 class="link-title">'
         + link.title
         + '</h1><h3 class="link-body link-truncated"><a href="'
         + link.url
         + '">'
         + link.url
         + '</h3><button class="edit-link btn btn-info">edit</button>'
         + '<button class="delete-button btn btn-danger">delete</button></div></div>')
}

function whichButtons(bodyLength) {
  if(bodyLength > 100) {
    return '<button class="expand-toggle btn">show more</button>'
    + '<button class="expand-toggle btn hidden">show less</button>'
    + '<button class="edit-link btn btn-info">edit</button>'
    + '<button class="delete-button btn btn-danger">delete</button>'
  } else {
    return '<button class="edit-link btn btn-info">edit</button>'
    + '<button class="delete-button btn btn-danger">delete</button>'
  }
}

function toggleFullBody(toggleButton) {
  var $body = $(toggleButton).parent().find('.link-body');
  $body.toggleClass('link-truncated');
  var $toggleButtons = $(toggleButton).parent().find('.expand-toggle');
  $toggleButtons.toggleClass('hidden');
}
