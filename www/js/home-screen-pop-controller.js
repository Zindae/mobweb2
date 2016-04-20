myApp.controller('HomeScreenPopup', function($scope, $ionicPopup) {

   // When button is clicked, the popup will be shown...
   $scope.showPopup = function() {
      $scope.data = {};
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         // template: '<input type = "text" ng-model = "data.model">',
         title: 'Hello',
         subTitle: 'Please add this to your home screen!',
         scope: $scope,
			
         buttons: [
            { text: 'Cancel' }, 
            {
               text: '<b>Save</b>',
               type: 'button-positive',
                  onTap: function(e) {
						
                     if (!$scope.data.model) {
                        //don't allow the user to close unless he enters model...
                           e.preventDefault();
                     } else {
                        return $scope.data.model;
                     }
                  }
            }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };



   $scope.addToHomeScreen = 


   function(){
      setTimeout( 
         function() {
            $scope.data = {};
            var myPopup = $ionicPopup.show({
               title: 'Add this page to your home screen!',
               scope: $scope,
               buttons: [
                  {  text: '<b>Got it!</b>',
                     type: 'button-positive',
                     onTap: function(e) {
                           return;
                     }
                  }
               ]  
            });
            myPopup.then(function(res) {
               console.log('Tapped!', res);
            });    
               } , 5000);};

});