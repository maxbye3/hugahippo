
  $( document ).ready(function() {
    $("#gmap_canvas").attr("height", window.innerHeight - 350);
    $("#animationsHere").removeClass(); 
    $(".hippoDisclaimer").hide();
    setTimeout(function () {
      $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
    }, 0);
  });

  function hideAll(){
    $(".hippoDetails, .homepage,.hippoDisclaimer").hide();
    $("#animationsHere").removeClass();
  }

  function disclaimer() {
    hideAll();
    $(".hippoContainer, .hippoDisclaimer").show();
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/disclaimer.png")', "background-size": 'cover'});
  }

  function londonZooDescription() {
    hideAll();
    $(".hippoContainer, .hippoDetails").show();
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/details.png")', "background-size": 'cover'});
  } 

  hideAll();
  londonZooDescription();