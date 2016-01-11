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
      var elementView = new ElementView();
      elementView.removeElement(elm_id);
    });
  });
}
