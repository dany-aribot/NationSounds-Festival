console.log('main.js');


function init() {
    console.log('insite init');
    const parcVillette = {
        lat: 48.834025,
        lng: 2.104676

    }





    var positionIcon = L.icon({
      iconUrl: '/imgs/loalisation.png',
      
      iconSize:     [65, 65], // size of the icon
      iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });


  var snackIcon = L.icon({
    iconUrl: '/imgs/snack.png',
    
    iconSize:     [65, 65], // size of the icon
    iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var sceneIcon = L.icon({
  iconUrl: '/imgs/scene.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var wcIcon = L.icon({
  iconUrl: '/imgs/wc.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var barIcon = L.icon({
  iconUrl: '/imgs/bar.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



var soinIcon = L.icon({
  iconUrl: '/imgs/soin.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var campingIcon = L.icon({
  iconUrl: '/imgs/bonhomme_1.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var welcomeIcon = L.icon({
  iconUrl: '/imgs/welcome.png',
  
  iconSize:     [40, 40], // size of the icon
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var wchandiIcon = L.icon({
  iconUrl: '/imgs/wchandi.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkingIcon = L.icon({
  iconUrl: '/imgs/parking.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var perdIcon = L.icon({
  iconUrl: '/imgs/perd.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var infoIcon = L.icon({
  iconUrl: '/imgs/info.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var boutiqueIcon = L.icon({
  iconUrl: '/imgs/boutique.png',
  
  iconSize:     [65, 65], // size of the icon
  iconAnchor:   [30, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});





  

    navigator.geolocation.getCurrentPosition = (fn) => {
        setTimeout(() => {
          fn({
            coords: {
              accuracy: 40,
              altitude: null,
              altitudeAccuracy: null,
              heading: null,
              latitude: 48.834025,
              longitude: 2.104676,
              speed: null,
            },
            timestamp: Date.now(),
          })
        }, 500)
      } 

    const zoomLevel = 15;

    const map = L.map('mapid').setView([parcVillette.lat, parcVillette.lng], zoomLevel);

    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWxleGFuZHJlMTEyOCIsImEiOiJja2pvNXdjdnUwYWNlMnJsMTl0Z3J3MTJuIn0.oorbxbENtfxlE9-3uI3LeA'
    });

    mainLayer .addTo(map);


    function onLocationFound(e) {
      
  
      L.marker(e.latlng, {icon:positionIcon}).addTo(map).bindPopup("Ma position");
        }
  
    function onLocationError(e) {
      alert(e.message);
    }
  
    map.on('locationfound', onLocationFound);
    map.on('locationerror', onLocationError);
  
    map.locate({setView: true, maxZoom: 16});






    L.marker([48.833177, 2.099811], {icon:snackIcon,tags:["Snack"]}).addTo(map).bindPopup("Snack");

    L.marker([48.832485, 2.110818], {icon:snackIcon,tags:["Snack"]}).addTo(map).bindPopup("Snack");

    L.marker([48.835430, 2.107793], {icon:snackIcon,tags:["Snack"]}).addTo(map).bindPopup("Snack");


    L.marker([48.830649, 2.109645], {icon:perdIcon,tags:["Objets trouvés"]}).addTo(map).bindPopup("Objets trouvés");

    L.marker([48.831731, 2.111381], {icon:infoIcon,tags:["Point informations"]}).addTo(map).bindPopup("Point informations");

    L.marker([48.834935, 2.099249], {icon:boutiqueIcon,tags:["Boutique"]}).addTo(map).bindPopup("Boutique");



    L.marker([48.835820, 2.101484], {icon:sceneIcon,tags:["Scène 1"]}).addTo(map).bindPopup("Scène 1");

    L.marker([48.835855, 2.105314], {icon:sceneIcon,tags:["Scène 2"]}).addTo(map).bindPopup("Scène 2");

    L.marker([48.834902, 2.109230], {icon:sceneIcon,tags:["Scène 3"]}).addTo(map).bindPopup("Scène 3");
    
    L.marker([48.832430, 2.102289], {icon:sceneIcon,tags:["Scène 4"]}).addTo(map).bindPopup("Scène 4");

    L.marker([48.833949, 2.105529], {icon:sceneIcon,tags:["Scène 5"]}).addTo(map).bindPopup("Scène 5");



    L.marker([48.831644, 2.104778], {icon:wcIcon,tags:["Toilettes"]}).addTo(map).bindPopup("Toilettes");

    L.marker([48.834229, 2.098716], {icon:wcIcon,tags:["Toilettes"]}).addTo(map).bindPopup("Toilettes");

    L.marker([48.835755, 2.106259], {icon:wcIcon,tags:["Toilettes"]}).addTo(map).bindPopup("Toilettes");

    L.marker([48.831574, 2.105814], {icon:wchandiIcon,tags:["Toilettes handicapé"]}).addTo(map).bindPopup("Toilettes handicapé");



    L.marker([48.833657, 2.099113], {icon:barIcon,tags:["Bar"]}).addTo(map).bindPopup("Bar");

    L.marker([48.836080, 2.103115], {icon:barIcon,tags:["Bar"]}).addTo(map).bindPopup("Bar");

    L.marker([48.833678, 2.110808], {icon:barIcon,tags:["Bar"]}).addTo(map).bindPopup("Bar");



    L.marker([48.832096, 2.109724], {icon:soinIcon,tags:["Infirmerie"]}).addTo(map).bindPopup("Infirmerie");

    L.marker([48.835698, 2.099757], {icon:soinIcon,tags:["Infirmerie"]}).addTo(map).bindPopup("Infirmerie");


    L.marker([48.829886, 2.111222], {icon:parkingIcon,tags:["Parking"]}).addTo(map).bindPopup("Parking");




    L.marker([48.831214, 2.108131], {icon:campingIcon,tags:["Camping"]}).addTo(map).bindPopup("Camping");


    L.marker([48.831013, 2.110959], {icon:welcomeIcon,tags:["Entrée du festival"]}).addTo(map).bindPopup("Entrée du festival");

    L.control.tagFilterButton({
      data: ['Bar', 'Toilettes', 'Infirmerie', 'Camping', 'Scène 1', 'Scène 2', 'Scène 3', 'Scène 4', 'Scène 5', 'Snack', 'Entrée du festival', 'Toilettes handicapé', 'Parking', 'Objets trouvés', 'Point informations', 'Boutique'], 
      filterOnEveryClick:true,
      icon: '<img src="/imgs/filter.png">'
    }).addTo( map );

}



