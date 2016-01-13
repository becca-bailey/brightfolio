function FolioView() {

}

FolioView.prototype.toggleSidebar = function() {
  $container = $("#container").packery();
  $("#container").toggleClass("m12").toggleClass("m9");
  $("#sidebar").toggle();
  $container.packery();
};

FolioView.prototype.showSidebar = function() {
  if ($("#container").hasClass("m12")) {
    folioView.toggleSidebar();
    }
  }


