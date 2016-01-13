function ContainerView() {

}

ContainerView.prototype.packery = function(className) {
  var $container = $("#container");
  $container.packery({
    itemSelector: className,
    gutter: 10
  });
};

ContainerView.prototype.modularDraggable = function(className) {
  var $container = $("#container");
  $container.find(className).each( function( i, itemElem ) {
    var draggie = new Draggabilly( itemElem );
    $container.packery( 'bindDraggabillyEvents', draggie );
  });
};

ContainerView.prototype.freeformDraggable = function(className) {
  var $container = $("#container");
  $container.find(className).each( function( i, itemElem ) {
    var draggie = new Draggabilly( itemElem );
    $container.packery( draggie );
  });
};
