$(document).ready(function() {
  clickToEdit();
  clickPublic();
});

function clickToEdit() {
  $("#container").on("dblclick", ".element", function() {
    var elementView = new ElementView();
    var elm_id = $(this).attr("id");
    changeFormMethod(elm_id);
    elementView.hideIcons();
    folioView.showSidebar();
    elementView.removeEditClass();
    $(this).addClass("editing");
    elementView.showIcons(elm_id);
    $("#form-title").text("Edit your element");
    edit(elm_id);
    // update(elm_id);
  });
}

function clickPublic() {
  $("#container").on("dblclick", ".element-public", function() {
    var elementView = new ElementView();
    var elm_id = $(this).attr("id");
    elementView.hideIcons();
    elementView.showIcons(elm_id);
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
  hiddenInput = document.createElement("input");
  hiddenInput.type="hidden";
  hiddenInput.name="_method";
  hiddenInput.value="put";
  hiddenInput.id="hidden_input";
  $("#hidden_input").remove();
  $("#new_element").prepend(hiddenInput);
}


function revertFormMethod() {
  var formAction = "/folios/" + REGISTRY.folio_id + "/elements";
  $("#new_element").attr("action", formAction );
  $("#hidden_input").remove();
}
