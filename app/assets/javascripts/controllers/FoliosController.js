$(document).ready(function() {
  $(window).load(function() {
    $('.modal-trigger').leanModal();
    var containerView = new ContainerView();
    var $container = $("#container").packery();
    containerView.packery(".modular");
    containerView.modularDraggable(".modular");
    containerView.freeformDraggable(".freeform");
  });
});
