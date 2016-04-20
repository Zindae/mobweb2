myApp.controller('MapCtrl', function($scope, $ionicLoading, $compile, $ionicPopup) {
   function initialize() {
   		var myLatlng = new google.maps.LatLng(59.3498065, 18.0706645);
   		
   		var mapOptions = {
   			center: myLatlng,
   			zoom: 16,
   			mapTypeId: google.maps.MapTypeId.ROADMAP 
   		}; 

//////////// KTH Marker ///////////		
		
   		var map = new google.maps.Map(document.getElementById("map"), mapOptions);

   		var contentString = "<div><a ng-click='clickTest()'>	Click me for secrets!</a></div>";
   		var compiled = $compile(contentString)($scope);

   		var infowindow = new google.maps.InfoWindow({
   			content: compiled[0]
   		}); // this is the popup that appears when click the marker

   		var marker = new google.maps.Marker({
   			position: myLatlng,
   			map: map,
   			title: 'KTH'
   		});

		$scope.clickTest = function() {
			alert('Alert for Hjalmars Fiskenäste')
		};
//////////// LISTENER PER MARKER /////////////

		google.maps.event.addListener(map, 'click', function(event) {
			placeMarker(event.latLng);
   		});

        function placeMarker(location) {
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                animation: google.maps.Animation.DROP
            });
			google.maps.event.addListener(marker, 'click', function() {
				var res = markerPop(marker);
			});
        }
		
		function markerPop(marker) {
			$scope.data = {};
			var myPopup = $ionicPopup.prompt({
				title: "Enter description of this location",
				inputType: 'text',
				inputPlaceholder: 'Any special memories?'
			}).then(function(res) {
				var infowindow = new google.maps.InfoWindow({
					content: res
				});
			
				infowindow.open(map, marker);
			});   
		};
		
//////////// LISTENER PER MARKER END ///////////////
		
   		$scope.map = map; // MAP is passed to scope (*)
   }	// function initialize

   
    google.maps.event.addDomListener(window, 'load', initialize);
    /* If you wish to capture and respond to DOM-events, the Maps API
    provides the addDomListener() static method to listen to and bind to
    DOM events. */

//////////// MEGA CENTER MAP //////////////		
	
    $scope.centerOnMe = function() {
    	if (!$scope.map) {
    		return;
    	}

    	$scope.loading = $ionicLoading.show({
    		content: 'Getting current location...',
      		showBackdrop: false // backdrop darkens the screen. it doesn't have any specified purpose
    	});

    	navigator.geolocation.getCurrentPosition(function(pos) {
    		$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    		$scope.loading.hide();
    	}, function(error) {
    		alert('Unable to get location: ' + error.message);
    	});

    	/* The Geolocation interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.
		
	 	The Geolocation.getCurrentPosition() method is used to get the current position of the device.

    	The Navigator.geolocation read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.*/

    };



});




























// myApp.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
//    function initialize() {
//    		var myLatlng = new google.maps.LatLng(59.3498065, 18.0706645);
//    		/* i think we access and retrieve the ggl maps functions in the index
//    		html file and then we can use it's function here int map controller
//    		*/
//    		var mapOptions = {
//    			center: myLatlng,
//    			zoom: 16,
//    			mapTypeId: google.maps.MapTypeId.ROADMAP 
//    		}; // javascript object for conatining the map options


//    		// (*) THE MAP <<== !!!
//    		var map = new google.maps.Map(
//    			document.getElementById("map"), mapOptions); // create map w/element+options 

//    		// TESTING Marker + infowindow + angularjs compiled ng-click
//    		var contentString = "<div><a ng-click='clickTest()'Click me!</a></div>";
//    		var compiled = $compile(contentString)($scope);
//    		/*
// 			$compile: This service converts a html string in a fully functional DOM element. The resulting DOM would have all linking, events working just like a DOM element. This uses $parse internally for evaluating expressions. 

// 			=> my interpretation of this is that the compile converts the contentString, which at the moment is just a text-string, into a fully functional Dom-element so that it will function as it is supposed to.
//    		*/
//    		// END OF TESTING ... i think??

//    		var infowindow = new google.maps.InfoWindow({
//    			content: compile[0]
//    		}); // this is the popup that appears when click the marker

//    		var marker = new google.maps.Marker({
//    			position: myLatlng,
//    			map: map,
//    			title: 'Uluru (Ayers Rock)'
//    		});

//    		google.maps.event.addListener(marker, 'click', function() {
//    			infowindow.open(map, marker);
//    		});

//    		$scope.map = map; // MAP is passed to scope (*)
//    }	// function initialize

//     google.maps.event.addDomListener(window, 'load', initialize);
//     /* If you wish to capture and respond to DOM-events, the Maps API
//     provides the addDomListener() static method to listen to and bind to
//     DOM events. */

//     $scope.centerOnMe = function() {
//     	if (!$scope.map) {
//     		return;
//     	}

//     	$scope.loading = $ionicLoading.show({
//     		content: 'Getting current location...',
//       		showBackdrop: false // backdrop darkens the screen. it doesn't have any specified purpose
//     	});

//     	navigator.geolocation.getCurrentPosition(function(pos) {
//     		$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//     		$scope.loading.hide();
//     	}, function(error) {
//     		alert('Unable to get location: ' + error.message);
//     	});

//     	/* The Geolocation interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.
		
// 	 	The Geolocation.getCurrentPosition() method is used to get the current position of the device.

//     	The Navigator.geolocation read-only property returns a Geolocation object that gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.*/

//     };

// 	$scope.clickTest = function() {
// 		alert('Example of infowindow with ng-click')
// 	};

// });











