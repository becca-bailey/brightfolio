$(document).ready(function() {
  $("#sidebar form").on("submit", function(event) {
    event.preventDefault();
    var id = $("#id").val();
    var data = $(this).serialize();
    post(id, data);
  });
  $(".element").on("dblclick", function() {
    var elm_id = $(this).attr("id");
    console.log($(this).attr("href"));
    edit(id, elm_id);
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

function edit(id, elm_id) {
  $.ajax({
    dataType: "json",
    method: "PUT",
    url: "/folios/" + id + "/elements/" + elm_id
  }).done(function(responseData) {
    console.log(responseData);
  });

}
