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

  $("button#default").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");

  })

  $("button#dark").click(function(){
    console.log("dark");
    $("body").removeClass();
    $("body").addClass("dark-background");
  })

  $("p").click(function(){
    $("p").removeClass();
    $("p").addClass("highlight");
  })

  $(".btn-black").click(function() {
    console.log("button");
    $("#night").toggle();
    $("#day").toggle();
  });
});
