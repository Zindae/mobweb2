myApp.factory('videoApi', function ($resource) {
	
	this.yt = $resource('https://www.googleapis.com/youtube/v3/videos?id=:id',{id:'@videoID', part:'snippet', key: 'AIzaSyDskT9SnSCiKLDn4DgRIguNi27wVyn6xt0'});
	
	this.karateList = 
		{
		PWLv6UOr9TQ:{videoURL: 'PWLv6UOr9TQ', done: false,	rating: 3},
		wYBL5aAFgJQ:{videoURL: 'wYBL5aAFgJQ', done: false,	rating: 3},
		rzoLnPr5EBs:{videoURL: 'rzoLnPr5EBs', done: false,	rating: 3},
		Bk7RVw3I8eg:{videoURL: 'Bk7RVw3I8eg', done: false,	rating: 3},
		cZOPhHos4lM:{videoURL: 'cZOPhHos4lM', done: false,	rating: 3},
		ik9x3eAJfdg:{videoURL: 'ik9x3eAJfdg', done: false,	rating: 3},
		DMjeu1yGBB0:{videoURL: 'DMjeu1yGBB0', done: false,	rating: 3}
	}
		
	this.getList = function() {
		return this.karateList;
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