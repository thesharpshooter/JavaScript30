var second = document.querySelector(".second");
var minute = document.querySelector(".minute");
var hour = document.querySelector(".hour");
function tick(){
	var time = new Date();
	var seconds = time.getSeconds();
	var mins = time.getMinutes();
	var hours = time.getHours()%12;
	console.log(mins);
	console.log(hours);

	var secRotate = seconds*6 + 90 ;
	var minRotate = seconds/10 +90 + mins*6;
	var hourRotate = seconds/600 + 90 + hours*30;
	
	// console.log(secRotate);
		
	if(secRotate>446){
		second.style.transition = "";
	}
	second.style.transform = `rotate(${secRotate}deg)`;
	minute.style.transform = `rotate(${minRotate}deg)`;
	hour.style.transform = `rotate(${hourRotate}deg)`;

}

setInterval(tick,1000);