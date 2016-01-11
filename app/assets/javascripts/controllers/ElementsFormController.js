$(document).ready(function() {
  submitForm();
  clickToEdit();
});

function submitForm() {
  $("#new_element").on("submit", function(event) {
    event.preventDefault();
    var id = $("#id").val();
    var data = $(this).serialize();
    elm_id = "#" + id;
    if ($(elm_id).hasClass("editing")) {
      console.log("true");
      edit(id);
      update(id);
    } else {
      post(id, data);
    }
    // ^this code doesn't work yet.  Why?
  });
}

function post(id, data) {
  console.log("bar");
  // var folioView = new FolioView();
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
