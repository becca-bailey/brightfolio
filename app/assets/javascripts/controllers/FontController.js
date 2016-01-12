$(document).ready(function() {
  changeFont();
});

function changeFont() {
  var fontKey = "AIzaSyBHLUAMYL1z9Jgzx5kvhHEofbdSWoyOVSo"
  get(fontKey);
}

function get(fontKey) {
  $.ajax({
    dataType: "json",
    method: "GET",
    url: "https://www.googleapis.com/webfonts/v1/webfonts?key=" + fontKey
  }).done(function(responseData) {
    console.log(responseData);

    var fontUrl = responseData.items[0].files["regular"];

    var cssId = 'myCss'; //need to change to font name
    if (!document.getElementById(cssId))
    {
      var head = document.getElementsByTagName('head')[0];
      debugger
      var link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = fontUrl;
      link.media = 'all';
      head.appendChild(link);
      debugger
    }
  });
}


// $(".element").css('font-family', 'serif')
// 0. make API call DONE
// 1. parse the google data font
// 2. display the data on the page.
// 3. user needs to be able to select a font.
// 3a. include CSS style sheet
// 4. update the CSS style tag to selected font. $(".element").css('font-family', 'serif') loadStyleSheet inside success case or show alert
// 5. store selected font in rails database
