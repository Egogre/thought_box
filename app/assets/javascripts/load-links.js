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
         + '</h1><h4>read: <div class="read-status">'
         + link.read
         + '</div></h4><button class="read btn">toggle read</button>'
         + '<h3 class="link-body link-truncated"><a href="'
         + link.url
         + '">'
         + link.url
         + '</h3><button class="edit-link btn btn-info">edit</button>'
         + '<button class="delete-button btn btn-danger">delete</button></div></div>')
}
