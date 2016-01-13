$(document).ready(function() {
  var containerView = new ContainerView();
  var $container = $("#container").packery();
  containerView.packery(".element");
  containerView.modularDraggable(".element");
  packeryToggle();
});

function packeryToggle() {
  var $container = $('#container').packery();
  var isActive = true;

  $('#packery-toggle').on('click', function() {
    if ( isActive ) {
      $container.packery('destroy');
      $(this).removeClass("teal lighten-2");
    } else {
      $container.packery();
      $(this).addClass("teal lighten-2");
      containerView.draggable(".element");
    }
    isActive = !isActive;
  });

}

