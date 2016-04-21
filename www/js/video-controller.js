myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils, $ionicPopup, $ionicModal, videoApi) {
	
	// Add, remove and list management for videos

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
	
	
	//     $scope.karateList = [{videoURL:'PWLv6UOr9TQ', done:false}, {videoURL:'1TIwCP87PCA', done:false}, {videoURL:'wYBL5aAFgJQ', done:false}, {videoURL:'7oHObnP1sGE', done:false}, {videoURL:'IQ2ofp7bjxw', done:false}, {videoURL:'ow7uAvCU1TI', done:false}, {videoURL:'Bk7RVw3I8eg', done:false}, {videoURL:'_wKVv0WMnj8', done:false}, {videoURL:'aMimeO279YE', done:false}, {videoURL:'5m3Pc77egSg', done:false}];
	

	// console.log(videoApi.yt.get('Bk7RVw3I8eg'));
	
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
		videoApi.setVideo($scope.selectedId);

		$scope.modal.show();
		$scope.youtubeVideo = videoApi.yt.get({id:id});
		// $scope.theBestVideo = 'TyX2nGbAWgs'
}
// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

 });