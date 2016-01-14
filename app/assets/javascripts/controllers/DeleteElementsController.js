$(document).ready(function() {
  $(".delete").hide();
  $(".hide_element").hide();
  clickToDelete();
  clickToHide();
});

function clickToDelete() {
  $(".delete").on("click", function() {
    var elm_id = $(this).parent().attr("id");
    $.ajax({
      method: "DELETE",
      url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id
    }).done(function(responseData) {
      var elementView = new ElementView();
      elementView.removeElement(elm_id);
      revertFormMethod();
      $("#new_element").trigger("reset");
      var folioView = new FolioView();
      folioView.toggleSidebar();
    });
  });
}

function clickToHide() {
  $(".hide_element").on("click", function() {
    var elm_id = $(this).parent().attr("id");
    var elementView = new ElementView();
    elementView.removeElement(elm_id);
  });
}
