
function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.5074, lng: 0.1278 },
    zoom: 4,
  });
  directionsRenderer.setMap(map);
  setTimeout(function(){ directionsRenderer.setMap(map); }, 1000);
  setTimeout(function(){ displayDrivingRoute(directionsService, directionsRenderer); }, 2000);
  
}

function displayDrivingRoute(directionsService, directionsRenderer) {
    const whereAmI =  $("input").val() || "26 St John St, Barbican, London EC1M 4AY";
  // console.log(whereAmI);
        directionsService.route({
            origin: whereAmI,
            destination: "London Zoo",
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: "DRIVING",
          },
          (response, status) => {
            if (status == "OK") {
              $(".loadingHippo").hide();
              $("#map").css("height", window.innerHeight - 350);
              directionsRenderer.setDirections(response);
              localStorage.setItem("gate", "3");
              localStorage.setItem("where", "London Zoo");
              localStorage.setItem("time", response.routes[0].legs[0].duration.text);
            } else {
              window.alert("Directions request failed due to " + status);
            }
          }
        );
}
