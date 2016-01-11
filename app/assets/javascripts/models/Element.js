function Element(data) {
  this.title = data.title;
  this.description = data.description;
  this.element_link = data.element_link;
  this.citation = data.citation;
}

Element.prototype.showDeleteButton = function() {
  $(this).on("dblclick", function() {
    $(".delete").show();
  });
};


// Element.prototype.post = function(id, data) {
//     $.ajax({
//     dataType: "json",
//     method: "POST",
//     url: "/folios/" + id + "/elements",
//     data: data
//   }).done(function(responseData) {
//     var element = new Element(responseData);
//   });
// };
