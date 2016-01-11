function markAsReadLink(toggleButton) {
  var $parent = $(toggleButton).parent().parent();
  var linkID = $parent.attr('id');
  var $readElement = $parent.find('.read-status');
  var currentStatus = $readElement.text();
  var newStatus = changeStatus(currentStatus);

  patchRead(linkID, newStatus, $readElement);
}


function patchRead(linkID, newStatus, $readElement) {
  $.ajax({
    type: 'PATCH',
    url:  '/api/v1/links/' + linkID,
    data: { link: {read: newStatus} },
    dataType: 'json',
    success: function(response){
      $readElement.text(newStatus);
    }
  });
}

function changeStatus(currentStatus) {
  if(currentStatus === "true"){
    return "false";
  } else {
    return "true";
  }
}
