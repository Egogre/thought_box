$(document).ready(function(){
  var $links = $('#links');
  loadLinks($links);
  $('#link-save').on('click', function(){
    createLink($links, this);
  });

  $links.on('click', '.read', function(){
    markAsReadLink(this);
  });
});
