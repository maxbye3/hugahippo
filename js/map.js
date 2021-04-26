
function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
   center: { lat: 51.5074, lng: 0.1278 },
  });
  directionsRenderer.setMap(map);
  displayDrivingRoute(directionsService, directionsRenderer);
  // calculateWalkingRoute(directionsService);

  /*   document.getElementById("mode").addEventListener("change", () => {
      displayDrivingRoute(directionsService, directionsRenderer);
    }); */
}

function calculateWalkingRoute(directionsService) { 
  const whereAmI =  $("input").val() || "26 St John St, Barbican, London EC1M 4AY";
  console.log(whereAmI);
  directionsService.route({
      origin: whereAmI,
      destination: "London Zoo",
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: "WALKING",
    },
    (response, status) => {
      if (status == "OK") {
        console.log("walking duration: ", response.routes[0].legs[0].duration.text);
      }
    });
}


function displayDrivingRoute(directionsService, directionsRenderer) {
    const whereAmI =  $("input").val() || "26 St John St, Barbican, London EC1M 4AY";
  console.log(whereAmI);
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);
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
      // });
  // }
}
