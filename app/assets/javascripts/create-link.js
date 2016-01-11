function createLink($links, saveButton) {
  var $parent = $(saveButton).parent().parent();
  var $NewLinkTitle = $parent.find('#new-link-title');
  var $newLinkUrl = $parent.find('#new-link-url');
  var title = $NewLinkTitle.val();
  var linkUrl = $newLinkUrl.val();
  $NewLinkTitle.val('');
  $newLinkUrl.val('');
  postNewLink($links, title, linkUrl);
}

function postNewLink($links, title, linkUrl) {
  $.ajax({
    type: 'POST',
    url:  '/api/v1/links',
    data: { link: { title: title, url: linkUrl } },
    dataType: 'json',
    success: function(response){
      var linkElement = buildLinkElement(response);
      $links.prepend(linkElement);
    }
  });
}
