$(document).ready(function(){
  folioView = new FolioView();
  $("#add-element").on("click", function() {
    folioView.toggleSidebar();
  });
});
