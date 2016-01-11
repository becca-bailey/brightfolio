$(document).ready(function() {
  clickToEdit();
});

function clickToEdit() {
  $(".element").on("dblclick", function() {
    // $(this).addClass("w2");
    var folioView = new FolioView();
    if ($("#container").hasClass("m12")) {
      folioView.toggleSidebar();
    }
    $(this).addClass("editing");
    var elm_id = $(this).attr("id");
    $("#" + elm_id + ">.delete").show();
    edit(elm_id);
    update(elm_id);
  });
}

// function clickToDelete(elm_id) {
//   $("#" + elm_id + ">.delete").on("click", deleteElement(elm_id));
// }

function edit(elm_id) {
  $.ajax({
    dataType: "json",
    method: "GET",
    url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id
  }).done(function(responseData) {
    var editView = new EditView();
    editView.getFields(responseData);
  });
}

// function deleteElement(elm_id) {
//   $.ajax({
//     method: "DELETE",
//     url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id
//   }).done(function(responseData) {
//     var elementView = new ElementView();
//     elementView.removeElement(elm_id);
//   });
// }

function update(elm_id) {
  $("#new_element").on("change", function() {
    var data = $(this).serialize();
    $.ajax({
      dataType: "json",
      method: "PUT",
      url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id,
      data: data
    }).done(function(responseData) {
      console.log(responseData, elm_id);
      var updatedView = new ElementView();
      updatedView.update(responseData, elm_id);
      $("#new_element").trigger("reset");
      $("#" + elm_id).removeClass("editing");
      var folioView = new FolioView();
      folioView.toggleSidebar();
    });
  });
}
