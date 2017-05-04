$(document).ready(function() {
  var viewportWidth = $(window).width();
  var videoHeight = viewportWidth * 0.338;
  $('iframe').attr('height', videoHeight);
});


$(window).on('resize', function(){
      var win = $(this);

      if (win.width() > 1024) {
        $('iframe').attr('width', '40vw');
        var videoWidth = 40;
      }	elseif (win.width() > 850) {
        $('iframe').attr('width', '50vw');
        var videoWidth = 50;
      } elseif (win.width() > 600) {
        $('iframe').attr('width', '70vw');
        var videoWidth = 70;
      } elseif (win.width() > 400) {
        $('iframe').attr('width', '80vw');
        var videoWidth = 80;
      } elseif (win.width() > 300) {
        $('iframe').attr('width', '90vw');
        var videoWidth = 90;
      } else {
        $('iframe').attr('width', '90vw');
        var videoWidth = 40;
      }

      var videoHeight =  videoWidth * 0.338;;
      $('iframe').attr('height', videoHeight + 'vh');
});
