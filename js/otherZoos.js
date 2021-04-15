
  $( document ).ready(function() {
    $("#gmap_canvas").css("height", window.innerHeight - 350);
    hideAll();    
    $(".selectZoo").show(); 
    $(".hippoContainer").show();   
  });

  function selectZoo(id) {
    console.log(1);
    $('#gmap_canvas').attr("src",id);
  }

  function hideAll(){
    // $(".selectMap, .selectZoo").hide();
  }

  function disclaimer() {
    hideAll();

  }