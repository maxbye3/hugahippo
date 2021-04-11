function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
  });
  directionsRenderer.setMap(map);
  displayDrivingRoute(directionsService, directionsRenderer);
  // calculateWalkingRoute(directionsService);

  /*   document.getElementById("mode").addEventListener("change", () => {
      displayDrivingRoute(directionsService, directionsRenderer);
    }); */
}

function calculateWalkingRoute(directionsService) {
  directionsService.route({
      origin: "26 St John St, Barbican, London EC1M 4AY",
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        directionsService.route({
            origin: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                      },
            destination: "London Zoo",
            // Note that Javascript allows us to access the constant
            // using square brackets and a string value as its
            // "property."
            travelMode: "DRIVING",
          },
          (response, status) => {
            if (status == "OK") {
              directionsRenderer.setDirections(response);
              console.log("driving duration: ", response.routes[0].legs[0].duration.text);
              /* console.log("walking: 1 hour 6 minutes") */
              ;
            } else {
              window.alert("Directions request failed due to " + status);
            }
          }
        );
      });
  }
}
