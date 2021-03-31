
  $( document ).ready(function() {
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/details.png")', "background-size": 'cover'});
    $(".description").show();
    $("#gmap_canvas").attr("height", window.innerHeight - 350);
    $("#animationsHere").removeClass(); 
    $(".hippoDisclaimer").hide();
    window.scrollTo(0, 0); $('body').scrollTop(0); 
    setTimeout(function () {
      $("#animationsHere").show().addClass("animate__animated animate__zoomIn");      
    }, 1000);
  });