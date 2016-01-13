// $(document).ready(function() {
//   var containerView = new ContainerView();
//   var $container = $("#container").packery();
//   $("#sidebar").hide();
//   containerView.packery(".element");
//   containerView.modularDraggable(".element");
// });


// http://packery.metafizzy.co/packery.pkgd.js added as external resource

$(document).ready(function() {

  var $container = $('.packery').packery();

  $container.on( 'dblclick', '.item', function( event ) {
    var $target = $( event.currentTarget )
    var isGigante = $target.hasClass('gigante');
    $target.toggleClass('gigante');

    if ( isGigante ) {

      $container.packery();
    } else {
      $container.packery( 'fit', event.target );
    }
  });

});