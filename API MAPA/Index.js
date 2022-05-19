// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 4.7320069, lng: -74.0257485 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  //ubicacion - marcador - aplicada contacto