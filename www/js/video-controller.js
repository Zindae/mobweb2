myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils, $ionicPopup, $ionicModal, videoApi) {
	
	//Adds new video to list
    $scope.karateAdd = function() {
		videoApi.karateList[youtubeEmbedUtils.getIdFromURL($scope.karateInput)] = {videoURL:youtubeEmbedUtils.getIdFromURL($scope.karateInput), rating:1};
        $scope.karateInput = "";
		
		//SWAL Alert
		if ($scope.firstTimeAdd === true) {
			
			swal("Video added!", "Click on the video thumbnail for more fun stuff.", "success");
			$scope.firstTimeAdd = false;
		}
		else {
			swal({   title: "Video added!",   text: "",   timer: 1000,   showConfirmButton: false, type:"success"});
		}
	}
	
	//Checks if first time adding video
	$scope.firstTimeAdd = true;
	
	//Obselete remove function
    $scope.remove = function(){
        var oldList = $scope.karateList;
        $scope.karateList = [];
        angular.forEach(oldList, function(x) 
            {
            if (!x.adone) $scope.karateList.push(x);
            });
        };
	
	//Gets Video List
	$scope.videoList = function() {
		return videoApi.getList();
	}
	
	//Button for adding comment, pushes to model and updates.
	$scope.btn_add = function(txtcomment, selectedId) {
		$scope.comment = txtcomment;
		videoApi.karateList[selectedId].comments = videoApi.karateList[selectedId].comments+'/'+$scope.comment;
		$scope.getComments = videoApi.karateList[$scope.selectedId].comments;
	}
	
	//Sets rating function
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
        scope: $scope,
        animation: 'slide-in-up'
    });  
	
	// Scope for inside the modal, opens modal when clicked. id = videoID
	$scope.openModal = function(id) {
		$scope.selectedId = id;
		$scope.getComments = videoApi.karateList[$scope.selectedId].comments;
		$scope.videoRating = videoApi.karateList[$scope.selectedId].rating;
		videoApi.setVideo($scope.selectedId);
		
		//Shows modal
		$scope.modal.show();
		
		// Checks if video is rated.
		if (videoApi.karateList[id].done === true){
			$scope.checked = true;
		}
		else {
			$scope.checked = false;
		};
		$scope.youtubeVideo = videoApi.yt.get({id:id});

}
		// $scope.theBestVideo = 'TyX2nGbAWgs'
		// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

 });