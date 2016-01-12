$(document).ready(function() {
  var containerView = new ContainerView();
  var $container = $("#container").packery();
  $("#sidebar").hide();
  containerView.packery(".element");
  containerView.modularDraggable(".element");
});