$(document).ready(function() {
  $(".done").hide();

  $(".done").on("click", function() {
    var folioView = new FolioView();
    var elementView = new ElementView();
    revertFormMethod();
    $("#new_element").trigger("reset");
    folioView.toggleSidebar();
    elementView.hideIcons();
    $("#form-title").text("Add an element to your folio");
  });
});

