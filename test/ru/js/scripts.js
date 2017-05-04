$(document).ready(function() {
  var viewportHeight = $(window).height();
  var videoHeight = parseInt(viewportHeight) * 0.80;
  $('iframe').attr('height', videoHeight);
});

$(window).resize(function(){
  var viewportHeight = $(window).height();
  var videoHeight = parseInt(viewportHeight) * 0.80;
  $('iframe').attr('height', videoHeight);
}
