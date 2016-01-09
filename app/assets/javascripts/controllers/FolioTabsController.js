$(document).ready(function(){
  // $('ul.tabs').tabs();
  $("#tab-content").hide();
  $("#tabs").on("mouseenter", function() {
    $("#tab-content").show();
  }).on("mouseleave", function() {
    $("#tab-content").hide();
  });
});
