        $("#gmap_canvas").attr("height", window.innerHeight - 350);
        $("#animationsHere").removeClass();
        $(".hippoDisclaimer").hide();
  setTimeout(function () {
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
  }, 2000);


  function hugThisHippo() {
    $(".homepage, .hippoContainer").hide();
    $("#animationsHere").removeClass();
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
    $(".hippoBg").css({"background": 'url("../img/bg.jpg")', "background-size": 'cover'});
  }