// function fired to play the audio
function keydown(event){
	var audio = document.querySelector(`audio[data-key = '${event.keyCode}']`);
	var key = document.querySelector(`.button[data-key = '${event.keyCode}']`);
	if (!audio) {return false;}
	if (!key) {return false;}
	audio.currentTime = 0;
	audio.play();
	console.log(key);
	key.classList.add('playing');
}

// function fired to remove playing class
function foo(event){
	if (event.propertyName != "transform"){return false}
	this.classList.remove('playing'); 
}

var keys = document.querySelectorAll('.button');
keys.forEach(key => key.addEventListener('transitionend',foo));

window.addEventListener("keydown",keydown);
