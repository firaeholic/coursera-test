( function (window){
	var HelloSpeaker = {};
	var speakword = "Hello";
	HelloSpeaker.speak = function(name){
		this.name = name;
		console.log(speakword + " " + HelloSpeaker.name);
	}

	window.HelloSpeaker=HelloSpeaker;
})(window);