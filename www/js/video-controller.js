myApp.controller('karateCtrl', function($scope) 
    {
    $scope.karateList = [{karateText:'Rika Usama', done:false}, {karateText:'Jesse Enkamp', done:false}];
    $scope.karateAdd = function() 
        {
        $scope.karateList.push({karateText:$scope.karateInput, done:false});
        $scope.karateInput = "";
		console.log($scope.karateList);
        };

    $scope.remove = function() 
        {
        var oldList = $scope.karateList;
        $scope.karateList = [];
        angular.forEach(oldList, function(x) 
            {
            if (!x.adone) $scope.karateList.push(x);
            });
        };
 
	$scope.videoList = ['TyX2nGbAWgs'];
 $scope.theBestVideo = 'TyX2nGbAWgs';

});

myApp.controller('youtubeCtrl', function($scope, youtubeEmbedUtils) 
    {
    $scope.karateList = [{videoURL:'PWLv6UOr9TQ', done:false}, {videoURL:'1TIwCP87PCA', done:false}, {videoURL:'PWLv6UOr9TQ', done:false}, {videoURL:'1TIwCP87PCA', done:false}];
    $scope.karateAdd = function() 
        {
		console.log($scope.karateInput);
		console.log(youtubeEmbedUtils.getIdFromURL($scope.karateInput));
        $scope.karateList.push({videoURL:youtubeEmbedUtils.getIdFromURL($scope.karateInput), done:false});
		console.log($scope.karateList);
        $scope.karateInput = "";
        };

    $scope.remove = function() 
        {
        var oldList = $scope.karateList;
        $scope.karateList = [];
        angular.forEach(oldList, function(x) 
            {
            if (!x.adone) $scope.karateList.push(x);
            });
        };
 
 $scope.theBestVideo = 'TyX2nGbAWgs';

});