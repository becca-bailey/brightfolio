$(document).ready(function() {
  var containerView = new ContainerView();
  var $container = $("#container");
  containerView.packery(".element");
  containerView.modularDraggable(".element");
  $("#view-toggle").on("click", function() {
    $("#container").toggleClass("m8").toggleClass("m12");
    $container.packery('reloadItems');
    $("#sidebar").toggle();
  });
});
