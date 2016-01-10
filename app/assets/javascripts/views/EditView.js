function EditView() {

}

EditView.prototype.getFields = function(data) {
  $("input#element_title").val(data.title);
  $("input#element_description").val(data.description);
  $("input#element_citation").val(data.citation);
};
