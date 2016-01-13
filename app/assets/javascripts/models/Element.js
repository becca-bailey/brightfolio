function Element(data) {
  this.title = data.title;
  this.description = data.description;
  this.element_link = data.element_link;
  this.citation = data.citation;
}

Element.prototype.showDeleteButton = function() {
  $(this).on("dblclick", function() {
    if ($(".element").hasClass("editing")) {
      $(".delete").hide();
    }
    $(".delete").show();
  });
};

