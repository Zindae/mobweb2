// // http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html

// (function() {
  // 'use strict';

  // angular
    // .module('myApp')

    // .controller('RatingController', function($scope, videoApi) {
		// this.rating1 = 1;
		// console.log(this.rating1);
		// console.log(this.rating);
		// this.rating2 = 2;
		// this.isReadonly = false;
		// this.rateFunction = function(rating) {
			
		// };
	// });


    // .directive('starRating', starRating);
	
	// function SendRating(rating1) {
		// videoApi.setRating(rating1);
	

  // function RatingController() {
    // this.rating1 = 1;
	// console.log(this.rating1);
	// console.log(this.rating);
    // this.rating2 = 2;
    // this.isReadonly = false;
    // this.rateFunction = function(rating) {
    // };
  // }

  // function starRating(videoApi) {
    // return {
      // restrict: 'EA',
      // template:
        // '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        // '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        // '    <i class="fa fa-star"></i>' + // or &#9733
        // '  </li>' +
        // '</ul>',
      // scope: {
        // ratingValue: '=ngModel',
        // max: '=?', // optional (default is 5)
        // onRatingSelect: '&?',
        // readonly: '=?'
      // },
      // link: function(scope, element, attributes) {
        // if (scope.max == undefined) {
          // scope.max = 5;
        // }
        // function updateStars() {
          // scope.stars = [];
          // for (var i = 0; i < scope.max; i++) {
            // scope.stars.push({
              // filled: i < scope.ratingValue
            // });
          // }
        // };
        // scope.toggle = function(index) {
          // if (scope.readonly == undefined || scope.readonly === false){
            // scope.ratingValue = index + 1;
            // scope.onRatingSelect({
              // rating: index + 1
            // });
          // }
        // };
        // scope.$watch('ratingValue', function(oldValue, newValue) {
          // if (newValue) {
            // updateStars();
          // }
        // });
      // }
    // };
  // }
// })();










// http://angulartutorial.blogspot.com/2014/03/rating-stars-in-angular-js-using.html





myApp.controller('RatingController', function(videoApi) {
		videoID = videoApi.getVideo();
		console.log('Star-controllerlog', videoApi.karateList[videoID].rating);
		this.rating1 = videoApi.currRate;
		this.rateFunction = function(rating) {
		};
	})


.directive('starRating', function(videoApi) {
	return {
      restrict: 'EA',
      template:
        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
        '    <i class="fa fa-star"></i>' + // or &#9733
        '  </li>' +
        '</ul>',
      scope: {
        ratingValue: '=ngModel',
        max: '=?', // optional (default is 5)
        onRatingSelect: '&?',
        readonly: '=?'
      },
      link: function(scope, element, attributes) {
        if (scope.max == undefined) {
          scope.max = 5;
        }
        function updateStars() {
          scope.stars = [];
          for (var i = 0; i < scope.max; i++) {
            scope.stars.push({
              filled: i < scope.ratingValue
            });
          }
        };
        scope.toggle = function(index) {
          if (scope.readonly == undefined || scope.readonly === false){
            scope.ratingValue = index + 1;
            scope.onRatingSelect({
              rating: index + 1
            });
          }
        };
        scope.$watch('ratingValue', function(oldValue, newValue) {
          // if (newValue) {
            updateStars();
			videoID = videoApi.getVideo();
			videoApi.setRating(videoID ,oldValue);
          // }
        });
      }
    };
});
	
	
	


    