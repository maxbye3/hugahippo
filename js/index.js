
  $( document ).ready(function() {
    hideAll();
    $("#map").css("height", '0px');
    $(".homepage, .otherHippos").show();    
    $("#animationsHere").removeClass(); 
    setTimeout(function () {
      $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      $(".hippoContainer").show();
    }, 1000);
  });

  function hideAll(){
    $(".hippoDetails, .homepage, .hippoContainer, .hippoDisclaimer, .otherHippos").hide();
    $("#animationsHere").removeClass();
  }

  function disclaimer() {
    hideAll();
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
    $(".hippoBg").css({"background": 'url("./img/disclaimer.png")', "background-size": 'cover'});
  }