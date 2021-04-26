
  $( document ).ready(function() {
    $("#gmap_canvas").css("height", window.innerHeight - 350);
    hideAll();    
    $(".selectZoo").show(); 
    $(".hippoContainer").show();   
  });

  function selectZoo(name, gate, time, id, isLondon) {
    $(".travelFrame").show();
    $('#gmap_canvas').attr("src",id);
    $(".btnText").html("Fly to this hippo ✈️")
    if(isLondon){
      $(".btnText").html("Walk to this hippo 🚶‍♂️")
    }

    console.log()

    // save zoo
    localStorage.setItem("gate", gate);
    localStorage.setItem("where", name);
    localStorage.setItem("time", time);

  }

  function hideAll(){
    // $(".selectMap, .selectZoo").hide();
  }

  function disclaimer() {
    hideAll();

  }