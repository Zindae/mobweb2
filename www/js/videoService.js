myApp.factory('videoApi', function ($resource) {
	this.yt = $resource('https://www.googleapis.com/youtube/v3/videos?id=:id',{id:'@videoID', part:'snippet', key: 'AIzaSyDskT9SnSCiKLDn4DgRIguNi27wVyn6xt0'});
	
	// this.karateList = {videoURL:'PWLv6UOr9TQ', done:false, rating:'2'};
	this.karateList = 
	{
		PWLv6UOr9TQ:{
			videoURL: 'PWLv6UOr9TQ',
			rating: 3}
	};
	
	this.getList = function() {
		return this.karateList;
	};
	
	this.currRate = 1;
	
	this.setRating = function(videoId, rat) {
		console.log('Rating är: ', rat);
		console.log('VideoID: ', videoId);
		
		this.karateList[videoId] = {videoURL:videoId, rating:rat};
		console.log(this.karateList);
		
		// this.karateList.push({videoId:rat});

	};
	
	// this.setVideo = function(videoId, rat) {
		// var videoId = x;
		// console.log('Video ID: ', videoId);
		// karateList[videoId].rating = rat;
	// }
	// numberOfGuest = $cookies.numberOfGuest !== undefined ? parseInt($cookies.numberOfGuest) : 2;
	
	this.currentVideo = 'PWLv6UOr9TQ'
	console.log('HEHEHE', this.currentVideo);
	
	this.setVideo = function(tempID) {
		console.log('setvideo:', tempID);
		this.currentVideo = tempID;
	}
	
	this.getVideo = function() {
		return this.currentVideo;
	}
	
	return this;
});