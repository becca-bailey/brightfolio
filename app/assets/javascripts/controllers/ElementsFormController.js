$(document).ready(function() {
  submitForm();
  clickToEdit();
});

function submitForm() {
  $("#new_element").on("submit", function(event) {
    event.preventDefault();
    var id = $("#id").val();
    var data = $(this).serialize();
    if ($(this).hasClass("edit-element")) {
      edit(id);
      update(id);
    } else {
      post(id, data);
    }
  });
}

function clickToEdit() {
  $(".element").on("dblclick", function() {
    if (!$("#sidebar form").hasClass("edit-element")) {
      $("#sidebar form").addClass("edit-element");
    }
    var elm_id = $(this).attr("id");
    edit(elm_id);
    update(elm_id);
  });
}

function post(id, data) {
  $.ajax({
    dataType: "json",
    method: "POST",
    url: "/folios/" + id + "/elements",
    data: data
  }).done(function(responseData) {
    var element = new Element(responseData);
    var elementView = new ElementView();
    var html = elementView.compile(element);
    elementView.render(html);
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
      console.log(responseData, elm_id);
      var updatedView = new ElementView();
      updatedView.update(responseData, elm_id);
      $("#new_element").trigger("reset");
      $("#sidebar form").removeClass("edit-element");
    });
  });
}
