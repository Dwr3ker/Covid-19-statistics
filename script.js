var map;

function createMap () {
  var options = {
    center: { lat: 43.654, lng: -79.383 },
    zoom: 4,
    disableDefaultUI: true,
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#800040"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#800040"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.icon",
    "stylers": [
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off",
        
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#011f14",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c",
        
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "color": "#011f14",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563",
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]
  };

  map = new google.maps.Map(document.getElementById('map'), options);

  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry)
        return;

      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    
    map.fitBounds(bounds);
    sendApiRequest()
  });
  
  
  //this starts the code that gets data of a country from the covid-19 api
  document.querySelector("#search").addEventListener("keypress",function (e) {
    
    if(e.key === 'Enter')
  sendApiRequest()
})
  
  async function sendApiRequest() {
  let userInput = document.querySelector("#search").value
  let response = await fetch(`https://covid-19-data.p.rapidapi.com/country?format=undefined&name=${userInput}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "3422e06cf4msh7bada0d678367e5p158818jsn2afeb2d73838"
	}
})
  console.log(response)
  let countries = await response.json()
  console.log(countries)
  useCovidApiData(countries)
};
  
function useCovidApiData(countries) {
  document.querySelector("#country").innerHTML = `${countries[0].country}`
  document.querySelector("#cases").innerHTML = `Confirmed Cases: ${countries[0].confirmed}`
  document.querySelector("#greeny").innerHTML = ` ${countries[0].recovered}`
  document.querySelector("#critical").innerHTML = `Critical: ${countries[0].critical}`
  document.querySelector("#redish").innerHTML = ` ${countries[0].deaths}`
}
  
}  
// country data ends here

// world total starts here 
let totalButton = document.querySelector("#total");

totalButton.addEventListener("click", ()=>{
  sendTotalApiRequest()
})

async function sendTotalApiRequest() {
  let response = await fetch(`https://covid-19-data.p.rapidapi.com/totals?format=undefined`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "3422e06cf4msh7bada0d678367e5p158818jsn2afeb2d73838"
	}
})
  
console.log(response)
  let total = await response.json()
  console.log(total)
  useCovidTotalApiData(total)
};

function useCovidTotalApiData(total) {
  document.querySelector("#titleTwo").innerHTML = `<span style="font-size:22px;">TOTAL COVID-19 CORONAVIRUS PANDEMIC REPORTS IN</span>`
  document.querySelector("#country").innerHTML = "The World"
  document.querySelector("#cases").innerHTML = `Confirmed Cases: ${total[0].confirmed}`
  document.querySelector("#greeny").innerHTML = ` ${total[0].recovered}`
  document.querySelector("#critical").innerHTML = `Critical: ${total[0].critical}`
  document.querySelector("#redish").innerHTML = ` ${total[0].deaths}`
}
//world total ends here


let dailyButton= document.querySelector("#daily")

dailyButton.addEventListener("click", ()=> {
  sendDailyApiRequest()
})

async function sendDailyApiRequest() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  console.log(date)
  let response = await fetch(`https://covid-19-data.p.rapidapi.com/report/totals?date-format=undefined&format=undefined&date=${date}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "3422e06cf4msh7bada0d678367e5p158818jsn2afeb2d73838"
	}
})
  
console.log(response)
  let daily = await response.json()
  console.log(daily)
  useCovidTDailyApiData(daily)
};

function useCovidTDailyApiData(daily) {
  document.querySelector("#titleTwo").innerHTML = `COVID-19 CORONAVIRUS PANDEMIC AS OF`
  
  document.querySelector("#country").innerHTML = `Today`
  
  if (daily[0].confirmed === null){
    document.querySelector("#cases").innerHTML = `Confirmed Cases: No Updates Today`
  } else {
    document.querySelector("#cases").innerHTML = `Confirmed Cases: ${daily[0].confirmed}`
  }
  
  if(daily[0].recovered === null){
     document.querySelector("#greeny").innerHTML = ` No Updates Today`
  } else {
     document.querySelector("#greeny").innerHTML = ` ${daily[0].recovered}`
  }
  
 if(daily[0].active === null) {
   document.querySelector("#critical").innerHTML = `Critical: No Updates Today`
 } else {
   document.querySelector("#critical").innerHTML = `Critical: ${daily[0].active}`
 }
  
  if(daily[0].deaths === null) {
    document.querySelector("#redish").innerHTML = ` No Updates Today`
  } else {
    document.querySelector("#redish").innerHTML = ` ${daily[0].deaths}`
  }
  
}

document.querySelector("#date").addEventListener("keypress",function (e) {
    
    if(e.key === 'Enter')
  sendApiRequest()
})
  
  async function sendApiRequest() {
  let dateInput = document.querySelector("#date").value
  let response = await fetch(`https://covid-19-data.p.rapidapi.com/report/totals?date-format=undefined&format=undefined&date=${dateInput}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "3422e06cf4msh7bada0d678367e5p158818jsn2afeb2d73838"
	}
})
  console.log(response)
  let date = await response.json()
  console.log(date)
  useCovidDateApiData(date)
};
  
function useCovidDateApiData(date) {
  document.querySelector("#titleTwo").innerHTML = `<span style="font-size:22px;">TOTAL COVID-19 CORONAVIRUS PANDEMIC REPORTS ON</span>`
  document.querySelector("#country").innerHTML = `${date[0].date}`
  document.querySelector("#cases").innerHTML = `Confirmed Cases: ${date[0].confirmed}`
  document.querySelector("#greeny").innerHTML = ` ${date[0].recovered}`
  document.querySelector("#critical").innerHTML = `Critical: ${date[0].active}`
  document.querySelector("#redish").innerHTML = ` ${date[0].deaths}`
}