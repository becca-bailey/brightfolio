$(document).ready(function() {
  $(".delete").hide();
  clickToDelete();
});

function clickToDelete() {
  $(".delete").on("click", function() {
    var elm_id = $(this).parent().attr("id");
    $.ajax({
      method: "DELETE",
      url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id
    }).done(function(responseData) {
      elementView = new ElementView();
      elementView.removeElement(elm_id);
      revertFormMethod();
      $("#new_element").trigger("reset");
      var folioView = new FolioView();
      folioView.toggleSidebar();
    });
  });
}
