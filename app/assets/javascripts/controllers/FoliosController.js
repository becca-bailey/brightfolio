$(document).ready(function() {
  var containerView = new ContainerView();
  var $container = $("#container").packery();
  containerView.packery(".modular");
  containerView.modularDraggable(".modular");
  packeryToggle();
});

function packeryToggle() {
  $('#packery-toggle').on('click', function() {
    var isActive = true;
    var $container = $('#container').packery();
    if ( isActive ) {
      $container.find(".modular").each( function( i, itemElem ) {
        var draggie = new Draggabilly( itemElem );
        $container( 'bindDraggabillyEvents', draggie );
      });
    } else {
      var $draggable = $('.draggable').draggabilly();
      $draggable.draggabilly('disable');
    }
    isActive = !isActive;
    $(".element").toggleClass(".modular").toggleClass(".draggable");
  });

}
