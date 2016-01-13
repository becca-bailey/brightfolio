// $(document).ready(function() {
//   // submitForm();
//   // clickToEdit();
// });
//
// function submitForm() {
//   $("#sidebar").on("submit", "#new_element", function(event) {
//     event.preventDefault();
//     var folioId = $("#id").val();
//     var data = $(this).serialize();
//     post(folioId, data);
//   });
//   $("#sidebar").on("submit", "#edit_element", function(event) {
//     event.preventDefault();
//     var elm_id = $(".editing").attr("id");
//     update(elm_id);
//   });
// }
//
// function post(folioId, data) {
//   $.ajax({
//     dataType: "json",
//     method: "POST",
//     url: "/folios/" + folioId + "/elements",
//     data: data
//   }).done(function(responseData) {
//     var element = new Element(responseData);
//     elementView = new ElementView();
//     var html = elementView.compile(element);
//     elementView.render(html);
//     folioView.toggleSidebar();
//   });
// }
