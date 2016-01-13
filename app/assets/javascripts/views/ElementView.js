function ElementView() {

}

ElementView.prototype.compile = function(element) {
  var elem = document.createElement("div");
  elem.className = 'element card';
  var deleteIcon = "<i class='material-icons delete'>close</i>";
  var title = "<p class='title'>" + element.title + "</p>";
  var description = "<p class='description'>" + element.description + "</p>";
  var link = "<a href=" + element.element_link + ">View More</a>";
  var content = deleteIcon + title + description + link;
  elem.innerHTML = content;
  return elem;
};

ElementView.prototype.render = function(elem) {
  var $container = $("#container").packery();
  $container.prepend(elem);
  $container.packery('prepended', elem);
  var draggie = new Draggabilly( elem );
  $container.packery( 'bindDraggabillyEvents', draggie );
};

ElementView.prototype.update = function(data, elm_id) {
  var $container = $('#container').packery();
  $("#" + elm_id + " .title").html(data.title);
  $("#" + elm_id + " .description").html(data.description);
  $("#" + elm_id + " .citation").html(data.citation);
  $container.packery();
};

ElementView.prototype.removeElement = function(elm_id) {
  var $container = $("#container").packery();
  $("#" + elm_id).remove();
  $container.packery();
};

ElementView.prototype.removeEditClass = function() {
  if ($(".element").hasClass("editing")) {
    $(".element").removeClass("editing");
  }
};

ElementView.prototype.hideIcons = function() {
  $(".delete").hide();
  $(".done").hide();
};

ElementView.prototype.showIcons = function(elm_id) {
  $("#" + elm_id + ">.delete").show();
  $("#" + elm_id + ">.done").show();
};
