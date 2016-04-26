myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils, $ionicPopup, $ionicModal, videoApi) {
	
	$scope.karateInput = '';
	//Adds new video to list
    $scope.karateAdd = function() {
		if ($scope.karateInput != '' && $scope.karateInput != youtubeEmbedUtils.getIdFromURL($scope.karateInput)) {
			console.log($scope.karateInput);
			videoApi.karateList[youtubeEmbedUtils.getIdFromURL($scope.karateInput)] = {videoURL:youtubeEmbedUtils.getIdFromURL($scope.karateInput), done: false, rating:1, comments:''};
			console.log(youtubeEmbedUtils.getIdFromURL($scope.karateInput));
			$scope.karateInput = "";
			videoApi.setCookie();
			$scope.videoList = videoApi.getList();
			//SWAL Alert
			if ($scope.firstTimeAdd === true) {
				swal("Video added!", "Click on the video thumbnail for more fun stuff.", "success");
				$scope.firstTimeAdd = false;
			}
			else {
				swal({   title: "Video added!",   text: "",   timer: 1000,   showConfirmButton: false, type:"success"});
			}
		} 
		else {
			swal({title:"Something went wrong!", text:"You need to input an URL.", type:"warning"});
			$scope.karateInput = "";
		}
	}
	
	$scope.removeVideo = function(idRemove) {
		$scope.idRemove = idRemove;
		$scope.modal.hide();
		swal({
			title: "Are you sure?",   text: "The video will be removed from your page!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false },
		function(){
			swal("Deleted!", "The video has been deleted.", "success");
			delete videoApi.karateList[idRemove];
			videoApi.setCookie();
			$scope.videoList = videoApi.getList();
			$scope.modal.hide();
		});		
	}
	
	//Checks if first time adding video for different popups
	$scope.firstTimeAdd = true;
	
	//Gets Video List
	$scope.videoList = videoApi.getList();
	
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
});