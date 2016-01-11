function FolioView() {

}

FolioView.prototype.toggleSidebar = function() {
  $container = $("#container").packery();
  $("#container").toggleClass("m9").toggleClass("m12");
  $("#sidebar").toggle();
  $container.packery();
};
