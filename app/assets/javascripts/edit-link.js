function editWindow(editElement) {
  var $parent = $(editElement).parent().parent();
  var linkTitle = $parent.find('.link-title').text();
  var linkUrl = $parent.find('.link-url').text();
  var readStatus = $parent.find('.read-status').text();

  $parent.find('#card1').hide();
  $parent.append(buildEditArea(readStatus));
  $parent.find('#edit-link-title').val(linkTitle);
  $parent.find('#edit-link-url').val(linkUrl);
}

function buildEditArea(readStatus) {
  return '<div id ="card2" class="card text-center"><br>' +
         '<input type="text" class="form-control text-center" style="font-size:35px" id="edit-link-title">' +
         '<br><h4>read: <div class="read-status">' +
         readStatus +
         '</div></h4>' +
         '<input type="text" class="form-control text-center" style="font-size:25px" id="edit-link-url">' +
         '<button class="edit-update btn btn-info">update</button></div>';
}

function editLink(editElement) {
  var $parent = $(editElement).parent().parent();
  var linkID = $parent.attr('id');
  var title = $parent.find('#edit-link-title').val();
  var linkUrl = $parent.find('#edit-link-url').val();

  updateLink(linkID, title, linkUrl, $parent);
}

function updateLink(linkID, title, linkUrl, $parent) {
  $.ajax({
    type: 'PATCH',
    url:  '/api/v1/links/' + linkID,
    data: { link: { title: title, url: linkUrl } },
    dataType: 'json',
    success: function(response){
      $parent.find('#card1').show();
      $parent.find('.link-title').text(title);
      // link href change
      $parent.find('.link-url').text(linkUrl);
      $parent.find('#card2').remove();
    }
  });
}
