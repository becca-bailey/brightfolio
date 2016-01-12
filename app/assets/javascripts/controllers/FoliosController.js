$(document).ready(function() {
  var containerView = new ContainerView();
  var $container = $("#container").packery();
  containerView.packery(".modular");
  containerView.modularDraggable(".modular");
  packeryToggle();
});

function packeryToggle() {
  var $container = $('#container').packery();
  var isActive = false;

  $('#packery-toggle').on('click', function() {
    // $(".element").toggleClass(".modular").toggleClass(".draggable");
    if ( isActive ) {
      $(this).css("color", "teal");
      containerView.draggable(".draggable");
    } else {
      $container.packery();
      $(this).css("color", "black");
    }
    isActive = !isActive;
  });

}
