function EditView() {

}

EditView.prototype.getFields = function(data) {
  $("input#element_title").val(data.title);
  $("textarea#element_description").val(data.description);
  $("input#element_citation").val(data.citation);
};
