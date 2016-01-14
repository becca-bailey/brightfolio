$(document).ready(function(){
  $container = $("#container").packery();
  $('.collapsible').collapsible({
  });
  $('select').material_select();

  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');



});
