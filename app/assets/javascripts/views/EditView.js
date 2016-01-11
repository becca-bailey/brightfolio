function EditView() {

}

EditView.prototype.getFields = function(data) {
  $("#delete").show();
  $("input#element_title").val(data.title);
  $("textarea#element_description").val(data.description);
  $("input#element_citation").val(data.citation);
  $("input#element_element_link").val(data.element_link);
};
