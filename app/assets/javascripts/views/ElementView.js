function ElementView() {

}

ElementView.prototype.compile = function(element) {
  var elem = document.createElement("div");
  elem.className = 'element card';
  var title = "<h3 class='title'>" + element.title + "</h3>";
  var description = "<p class='description'>" + element.description + "</p>";
  var link = "<a href=" + element.element_link + ">View More</a>";
  var content = title + description + link;
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
  $("#" + elm_id + " .title").html(data.title);
  $("#" + elm_id + " .description").html(data.description);
  $("#" + elm_id + " .citation").html(data.citation);
};
