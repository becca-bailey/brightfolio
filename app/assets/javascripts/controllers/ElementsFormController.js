$(document).ready(function() {
  $("#sidebar form").on("submit", function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    var id = $("#id").val();
    post(id, data);
  });
});

function post(id, data) {
  $.ajax({
    dataType: "json",
    method: "POST",
    url: "/folios/" + id + "/elements",
    data: data
  }).done(function(responseData) {
    console.log(responseData);
    var element = new Element(responseData);
    var elementView = new ElementView();
    var html = elementView.compile(element);
    elementView.render(html);
  });
}
