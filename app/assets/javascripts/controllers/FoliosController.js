$(document).ready(function() {
  $(window).load(function() {
    $('.modal-trigger').leanModal();
    var containerView = new ContainerView();
    var $container = $("#container").packery();
    containerView.packery(".modular");
    containerView.packery(".folio_card");
    containerView.modularDraggable(".modular");
    containerView.modularDraggable(".folio_card");
    containerView.freeformDraggable(".freeform");
  });
});
