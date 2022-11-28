( function (window){
	var GoodbyeSpeaker = {};
	var speakword = "Good Bye";
	GoodbyeSpeaker.speak = function(name){
		this.name = name;
		console.log(speakword + " " + GoodbyeSpeaker.name);
	}

  	window.GoodbyeSpeaker=GoodbyeSpeaker;
})(window);