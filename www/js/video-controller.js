myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils, $ionicPopup, $ionicModal) 
    {
    $scope.karateList = [{videoURL:'PWLv6UOr9TQ', done:false}, {videoURL:'1TIwCP87PCA', done:false}, {videoURL:'wYBL5aAFgJQ', done:false}, {videoURL:'7oHObnP1sGE', done:false}, {videoURL:'IQ2ofp7bjxw', done:false}, {videoURL:'ow7uAvCU1TI', done:false}, {videoURL:'Bk7RVw3I8eg', done:false}, {videoURL:'_wKVv0WMnj8', done:false}, {videoURL:'aMimeO279YE', done:false}, {videoURL:'5m3Pc77egSg', done:false}];
    $scope.karateAdd = function() {
        $scope.karateList.push({videoURL:youtubeEmbedUtils.getIdFromURL($scope.karateInput), done:false});
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
	
	$scope.showInfo = function(x) {
	}
 
	$ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
        $scope.modal = $ionicModal;
		}, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });  
	
	$scope.openModal = function(id) {
		$scope.selectedId = id;
		$scope.modal.show();
		$scope.theBestVideo = 'TyX2nGbAWgs'
}
	
 $scope.theBestVideo = 'TyX2nGbAWgs';
 });

// myApp.controller('karateCtrl', function($scope) 
    // {
    // $scope.karateList = [{karateText:'Rika Usama', done:false}, {karateText:'Jesse Enkamp', done:false}];
    // $scope.karateAdd = function() 
        // {
        // $scope.karateList.push({karateText:$scope.karateInput, done:false});
        // $scope.karateInput = "";
		// console.log($scope.karateList);
        // };

    // $scope.remove = function() 
        // {
        // var oldList = $scope.karateList;
        // $scope.karateList = [];
        // angular.forEach(oldList, function(x) 
            // {
            // if (!x.adone) $scope.karateList.push(x);
            // });
        // };
 
	// $scope.videoList = ['TyX2nGbAWgs'];
 // $scope.theBestVideo = 'TyX2nGbAWgs';

// });