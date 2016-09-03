// Init Google map
var THEMEREX_googlemap_init_obj = {};
var THEMEREX_googlemap_styles = {
	'default': [],
	'style1': [{
					"featureType": "landscape",
					"stylers": [
						{ "hue": "#FF0300"	},
						{ "saturation": -100 },
						{ "lightness": 20.4705882352941 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.highway",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 25.59999999999998 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.arterial",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": -22 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "road.local",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "water",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 21.411764705882348 },
						{ "gamma": 1 }
					]
				},
				{
					"featureType": "poi",
					"stylers": [
						{ "hue": "#FF0300" },
						{ "saturation": -100 },
						{ "lightness": 4.941176470588232 },
						{ "gamma": 1 }
					]
				}
			],
	'style2': [
		 {
		  "featureType": "landscape",
		  "stylers": [
		   {
		    "hue": "#007FFF"
		   },
		   {
		    "saturation": 100
		   },
		   {
		    "lightness": 156
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.highway",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -83.6
		   },
		   {
		    "lightness": 48.80000000000001
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.arterial",
		  "stylers": [
		   {
		    "hue": "#FF7000"
		   },
		   {
		    "saturation": -81.08108108108107
		   },
		   {
		    "lightness": -6.8392156862745
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "road.local",
		  "stylers": [
		   {
		    "hue": "#FF9A00"
		   },
		   {
		    "saturation": 7.692307692307736
		   },
		   {
		    "lightness": 21.411764705882348
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "water",
		  "stylers": [
		   {
		    "hue": "#0093FF"
		   },
		   {
		    "saturation": 16.39999999999999
		   },
		   {
		    "lightness": -6.400000000000006
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 },
		 {
		  "featureType": "poi",
		  "stylers": [
		   {
		    "hue": "#00FF60"
		   },
		   {
		    "saturation": 17
		   },
		   {
		    "lightness": 44.599999999999994
		   },
		   {
		    "gamma": 1
		   }
		  ]
		 }
	],
	'style3':  [
 {
  "featureType": "landscape",
  "stylers": [
   {
    "hue": "#FFA800"
   },
   {
    "saturation": 17.799999999999997
   },
   {
    "lightness": 152.20000000000002
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.highway",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 47.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.arterial",
  "stylers": [
   {
    "hue": "#FBFF00"
   },
   {
    "saturation": -78
   },
   {
    "lightness": 39.19999999999999
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "road.local",
  "stylers": [
   {
    "hue": "#00FFFD"
   },
   {
    "saturation": 0
   },
   {
    "lightness": 0
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "water",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": -14.599999999999994
   },
   {
    "gamma": 1
   }
  ]
 },
 {
  "featureType": "poi",
  "stylers": [
   {
    "hue": "#007FFF"
   },
   {
    "saturation": -77.41935483870967
   },
   {
    "lightness": 42.79999999999998
   },
   {
    "gamma": 1
   }
  ]
 }
]
}

function googlemap_init(dom_obj, coords, description, point) {
	"use strict";
	try {
		if (coords.latlng!=='') {
			var latlngStr = coords.latlng.split(',');
			var lat = parseFloat(latlngStr[0]);
			var lng = parseFloat(latlngStr[1]);
			var latlng = new google.maps.LatLng(lat, lng);
		} else
			var latlng = new google.maps.LatLng(0, 0);
 		THEMEREX_googlemap_init_obj[dom_obj.id] = {};
		THEMEREX_googlemap_init_obj[dom_obj.id].dom = dom_obj;
		THEMEREX_googlemap_init_obj[dom_obj.id].point = point;
		THEMEREX_googlemap_init_obj[dom_obj.id].description = description;
		THEMEREX_googlemap_init_obj[dom_obj.id].opt = {
			//maps Options
			zoom: coords.zoom,
			center: latlng,
			scrollwheel: false,
			scaleControl: false,
			disableDefaultUI: false, 
				panControl: true,
				zoomControl: true, //zoom
				mapTypeControl: false,
				streetViewControl: false,
				overviewMapControl: false,
				styles: THEMEREX_googlemap_styles[coords.style ? coords.style : 'default'],
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var custom_map = new google.maps.Geocoder();
		custom_map.geocode(coords.latlng!=='' ? {'latLng': latlng} : {"address": coords.address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				THEMEREX_googlemap_init_obj[dom_obj.id].address = results[0].geometry.location;
				googlemap_create(dom_obj.id);
			} else
				alert(THEMEREX_GEOCODE_ERROR + ' ' + status);
		});

		jQuery(window).resize(function() {
			if (THEMEREX_googlemap_init_obj[dom_obj.id].map) THEMEREX_googlemap_init_obj[dom_obj.id].map.setCenter(THEMEREX_googlemap_init_obj[dom_obj.id].address);
		});

	} catch (e) {
		//alert(THEMEREX_GOOGLE_MAP_NOT_AVAIL);
	};
}

function googlemap_create(id) {
	"use strict";
	if (!THEMEREX_googlemap_init_obj[id].address) return false;
	THEMEREX_googlemap_init_obj[id].map = new google.maps.Map(THEMEREX_googlemap_init_obj[id].dom, THEMEREX_googlemap_init_obj[id].opt);
	THEMEREX_googlemap_init_obj[id].map.setCenter(THEMEREX_googlemap_init_obj[id].address);
	var marker = new google.maps.Marker({
		map: THEMEREX_googlemap_init_obj[id].map,
		//icon: THEMEREX_googlemap_init_obj[id].point,
		icon: 'images/google_map_point.png',
		position: THEMEREX_googlemap_init_obj[id].map.getCenter()
	});
	var infowindow = new google.maps.InfoWindow({
		content: THEMEREX_googlemap_init_obj[id].description
	});
	google.maps.event.addListener(marker, "click", function() {
		infowindow.open(THEMEREX_googlemap_init_obj[id].map, marker);
	});
}

function googlemap_refresh(id) {
	"use strict";
	for (id in THEMEREX_googlemap_init_obj) {
		googlemap_create(id);
	}
}



jQuery(window).ready(function() {
 	//google maps
	jQuery('.sc_googlemap').each(function(){
		var maps_adress = jQuery(this).data('adress') != null &&  jQuery(this).data('adress') != '' ? jQuery(this).data('adress') : 'San Francisco, CA 94102, US';
		var maps_latlng = jQuery(this).data('latlng') != null &&  jQuery(this).data('latlng') != '' ? jQuery(this).data('latlng') : '37.778924,-122.420826';
	 	var maps_id = jQuery(this).attr('id');
 		var maps_zoom = jQuery(this).data('zoom') != null &&  jQuery(this).data('zoom') != '' ? jQuery(this).data('zoom') : 18;
 		var maps_style = jQuery(this).data('style');

		googlemap_init( jQuery('#'+maps_id).get(0), {address: maps_adress , latlng: maps_latlng, style: maps_style, zoom: maps_zoom});

	});
	

});
