$(document).ready(function() {
  clickToEdit();
});

function clickToEdit() {
  $("#container").on("dblclick", ".element", function() {
    var elm_id = $(this).attr("id");
    $(".delete").hide();
    folioView.showSidebar();
    var elementView = new ElementView();
    elementView.removeEditClass();
    $(this).addClass("editing");
    $("#" + elm_id + ">.delete").show();
    edit(elm_id);
    // update(elm_id);
  });
}

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

function update(elm_id) {
  $("#new_element").on("change", function() {
    var data = $(this).serialize();
    $.ajax({
      dataType: "json",
      method: "PUT",
      url: "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id,
      data: data
    }).done(function(responseData) {
      var updatedView = new ElementView();
      updatedView.update(responseData, elm_id);
      $("#new_element").trigger("reset");
      $("#" + elm_id).removeClass("editing");
      var folioView = new FolioView();
      folioView.toggleSidebar();
    });
  });
}

function changeFormMethod(elm_id) {
  var formAction = "/folios/" + REGISTRY.folio_id + "/elements/" + elm_id;
  $("#new_element").attr("action", formAction );
  $("#new_element").prepend("<input type='hidden' name='_method' value='put' />");
}
