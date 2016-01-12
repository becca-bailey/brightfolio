function FolioView() {

}

FolioView.prototype.toggleSidebar = function() {
  $container = $("#container").packery();
  $("#container").toggleClass("m9").toggleClass("m12");
  $("#sidebar").toggle();
  $container.packery();
};

FolioView.prototype.showSidebar = function() {
  if ($("#container").hasClass("m12")) {
    folioView.toggleSidebar();
  }
}
