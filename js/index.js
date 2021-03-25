        $("#gmap_canvas").attr("height", window.innerHeight - 350);
        $("#animationsHere").removeClass();
        $(".hippoDisclaimer").hide();
  setTimeout(function () {
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
  }, 2000);


  function hugThisHippo() {
    hideAll();
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/disclaimer.png")', "background-size": 'cover'});
  }

  function hideAll(){
    $(".homepage, .hippoContainer").hide();
    $("#animationsHere").removeClass();
  }

  function londonZooDescription() {
    $(".hippoBg").css({"background": 'url("http://mrmoonhead.com/hugahippo/img/details.png")', "background-size": 'cover'});
    
    setTimeout(function () {
      $(".hippoDisclaimer, .hippoContainer").show();
    $("#animationsHere").show().addClass("animate__animated animate__jackInTheBox");
      }, 1000);
  }