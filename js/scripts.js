$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hidden").slideToggle();
    $("#appear").slideToggle();
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  })

  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  })

  $("button#yellow").click(function(){
    $("body").removeClass();
    $("body").addClass("yellow-background");
  })

  $("button#white").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
  })
});
