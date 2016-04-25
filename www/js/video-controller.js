myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils, $ionicPopup, $ionicModal, videoApi) {
	
    $scope.karateAdd = function() {
		videoApi.karateList[youtubeEmbedUtils.getIdFromURL($scope.karateInput)] = {videoURL:youtubeEmbedUtils.getIdFromURL($scope.karateInput), rating:1};
        $scope.karateInput = "";
        };
		
    $scope.remove = function(){
        var oldList = $scope.karateList;
        $scope.karateList = [];
        angular.forEach(oldList, function(x) 
            {
            if (!x.adone) $scope.karateList.push(x);
            });
        };
		
	$scope.videoList = function() {
		return videoApi.getList();
	}

	$scope.setRating = function(x,y){
		$scope.selectedRating = x.path[0].value;
		$scope.id = y;
		videoApi.setRating($scope.selectedRating, $scope.id);
		if (videoApi.karateList[y].done === true){
			console.log('true');
			$scope.checked = true;
		}
		else {
			console.log('false');
			$scope.checked = false;
		};
		$scope.videoRating = videoApi.karateList[$scope.id].rating;
		
	}

	// HTML template for the modal
	$ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
		}, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });  
	
	$scope.setCurrentRate = function(rating) {
		videoApi.currRate = rating;
	}
	
	// Scope for inside the modal
	$scope.openModal = function(id) {
		$scope.selectedId = id;
		$scope.videoRating = videoApi.karateList[$scope.selectedId].rating;
		videoApi.setVideo($scope.selectedId);
		$scope.modal.show();
		if (videoApi.karateList[id].done === true){
			console.log('ratat');
			$scope.checked = true;
		}
		else {
			console.log('ej ratat');
			$scope.checked = false;
		};
		// $scope.videoRating = lol;
		$scope.youtubeVideo = videoApi.yt.get({id:id});
		// $scope.theBestVideo = 'TyX2nGbAWgs'
}
// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

 });