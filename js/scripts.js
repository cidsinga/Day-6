$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hidden").toggle();
    $("#appear").toggle();
  });
});
