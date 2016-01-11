$(document).ready(function() {
  submitForm();
  clickToEdit();
});

function submitForm() {
  $("#new_element").on("submit", function(event) {
    event.preventDefault();
    var folioId = $("#id").val();

    var data = $(this).serialize();

    // elm_id = "#" + ;


    // if ($(elm_id).hasClass("editing")) {
    //   console.log("true");
    //   update(id);
    // } else {
     post(folioId, data);
    // }
    // ^this code doesn't work yet.  Why?
  });
}

function post(folioId, data) {

  $.ajax({
    dataType: "json",
    method: "POST",
    url: "/folios/" + folioId + "/elements",
    data: data
  }).done(function(responseData) {
    var element = new Element(responseData);
    var elementView = new ElementView();
    var html = elementView.compile(element);
    elementView.render(html);
    folioView.toggleSidebar();
  });
}
