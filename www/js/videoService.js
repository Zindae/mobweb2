myApp.factory('videoApi', function ($resource, $cookies) {
	
	this.yt = $resource('https://www.googleapis.com/youtube/v3/videos?id=:id',{id:'@videoID', part:'snippet', key: 'AIzaSyDskT9SnSCiKLDn4DgRIguNi27wVyn6xt0'});
	
	this.karateList = 
		{
		PWLv6UOr9TQ:{videoURL: 'PWLv6UOr9TQ', done: false,	rating: 3, comments: 'awesome/love it!'},
		wYBL5aAFgJQ:{videoURL: 'wYBL5aAFgJQ', done: false,	rating: 3, comments: 'this was terrible/ugh'},
		rzoLnPr5EBs:{videoURL: 'rzoLnPr5EBs', done: false,	rating: 3, comments: '123123'},
		Bk7RVw3I8eg:{videoURL: 'Bk7RVw3I8eg', done: false,	rating: 3, comments: '3213'},
		cZOPhHos4lM:{videoURL: 'cZOPhHos4lM', done: false,	rating: 3, comments: '22'},
		ik9x3eAJfdg:{videoURL: 'ik9x3eAJfdg', done: false,	rating: 3, comments: '123'},
		DMjeu1yGBB0:{videoURL: 'DMjeu1yGBB0', done: false,	rating: 3, comments: 'ew!'}
	}
	
	this.setCookie = function () {
		$cookies.putObject('videoList', this.karateList)
	};
	
	this.getList = function() {
		console.log($cookies.getObject('videoList'));
		if ($cookies.getObject('videoList') === undefined) {
			this.setCookie();
		}
		return $cookies.getObject('videoList');
	};

	this.currRate = 1;
	
	this.setRating = function(rat,videoId) {
		this.karateList[videoId] = {videoURL:videoId, done: true, rating:rat};
	};

	this.currentVideo = 'PWLv6UOr9TQ'
	
	this.setVideo = function(tempID) {
		console.log('setvideo:', tempID);
		this.currentVideo = tempID;
	}
	
	this.getVideo = function() {
		return this.currentVideo;
	}
	
	return this;
});