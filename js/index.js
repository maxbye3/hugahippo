
  $( document ).ready(function() {
    hideAll();
    $(".homepage").show();
    $("#gmap_canvas").attr("height", window.innerHeight - 350);
    $("#animationsHere").removeClass(); 
    setTimeout(function () {
      $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      $(".hippoContainer").show();
    }, 1000);
  });

  function hideAll(){
    $(".hippoDetails, .homepage, .hippoContainer, .hippoDisclaimer").hide();
    $("#animationsHere").removeClass();
  }

  function disclaimer() {
    hideAll();
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/disclaimer.png")', "background-size": 'cover'});
  }