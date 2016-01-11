$(document).ready(function() {
  submitForm();
  clickToEdit();
});

function submitForm() {
  $("#new_element").on("submit", function(event) {
    event.preventDefault();
    var folioId = $("#id").val();
    console.log(folioId);
    var data = $(this).serialize();
    console.log(this);
    elm_id = "#" + id;
    console.log(elm_id);
    console.log($(elm_id).hasClass("editing"));
    if ($(elm_id).hasClass("editing")) {
      console.log("true");
      update(id);
    } else {
      post(id, data);
    }
    // ^this code doesn't work yet.  Why?
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
    folioView.toggleSidebar();
  });
}
