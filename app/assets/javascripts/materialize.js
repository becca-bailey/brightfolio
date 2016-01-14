$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false
  });
  $('select').material_select();

  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');



});

