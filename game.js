function print(a) {
	console.log(a);
}

var countryFlag = document.querySelector("#img");
var score  = document.querySelector("#score");
var optionOne = document.querySelector("#op1");
var optionTwo = document.querySelector("#op2");
var optionThree = document.querySelector("#op3");
var optionFour = document.querySelector("#op4");
var correct = new Audio();
var wrong = new Audio();
var backgroundSound = new Audio();
var newScore = 0;



correct.src = "sounds/correct.mp3";
wrong.src = "sounds/wrong.mp3";
backgroundSound.src = "sounds/background.mp3";
backgroundSound.volume = "0.5";
backgroundSound.loop = true;



var randNumber = 0;
// Math.floor(Math.random()*9);
		print(randNumber);


	// var randNumber = randomGen();
 // 	var lastNumber = randNumber;
	// if (lastNumber == randNumber ) {
	// 	randomGen()
	// }



 var x = document.querySelectorAll(".options");
 for(var i =0; i<4; i++){
 		x[i].addEventListener('click',checkAns);
 }


function main(){
	document.querySelector("#sp").style.visibility = "hidden";
	document.querySelector("#scorePage").style.visibility = "hidden";	
	backgroundSound.play();
	// correct.muted = true;
	// wrong.muted = true;

	
	updateGame();


}

function updateGame(){
	correct.muted = true;
	wrong.muted = true;

	
	var flag = `url('flags/${contries[randNumber].flag}.png')`;
				countryFlag.style.backgroundImage= flag;

	optionOne.innerText = contries[randNumber].options[0];
	optionTwo.innerText = contries[randNumber].options[1];
	optionThree.innerText = contries[randNumber].options[2];
	optionFour.innerText = contries[randNumber].options[3];


	
	
}

function checkAns(){

	if(this.innerText == contries[randNumber].country){
		print('correct');
		correct.muted = false;
		correct.currentTime = 0;
		wrong.currentTime = 0;

		correct.play();

		newScore += 10;
		score.innerText = newScore;
		this.style.background = "#4cc989";
		this.style.color = "#fbfbfb";
		// this.style.transition = "0.5s";
		var x = document.querySelectorAll(".options");
		
		for (var i = 0; i<4; i++) {
			x[i].disabled = "true";
			x[i].style.opacity = "0.7";
			this.style.opacity = "1";
			x[i].style.cursor = "not-allowed";
		
		}
	
	}
	else{
		print('wrong');
		wrong.muted = false;
		correct.currentTime = 0;
		wrong.currentTime = 0;

		wrong.play();

		this.style.background = "#DA3550";
		this.style.color = "#fbfbfb";
		// this.style.transition = "0.3s";

		var x = document.querySelectorAll(".options");
		for (var i = 0; i<4; i++) {
			x[i].disabled = "true";
			x[i].style.opacity = "0.7";
			this.style.opacity = "1";

			x[i].style.cursor = "blocked";

			if(x[i].innerText == contries[randNumber].country){
					x[i].style.background = "#4cc989";
					x[i].style.opacity = "1";
					x[i].style.transition = "0.3s";
					x[i].style.color = "#fbfbfb";

			}
		}


	}
	if (randNumber < contries.length-1) {

			randNumber+=1;

	}else{
		document.querySelector("#scorePage").style.visibility = "";
		document.querySelector("#scoreText").innerText = newScore;

		newScore = 0;
		randNumber = 0;
		score.innerText = newScore;


	}

	setTimeout(clearGame,1000);

	function clearGame(){

		var x = document.querySelectorAll(".options");
		
			for (var i = 0; i<4; i++) {
				x[i].disabled = "";
				x[i].style.opacity = "1";
				x[i].style.cursor = "pointer";
				x[i].style.background = "#fbfbfb";
				x[i].style.color = "#555";

				x[i].addEventListener("mouseover",function(){
					this.style.backgroundColor = "#ebce4c";
					this.style.color = "#fbfbfb";
					this.style.transition = "0.3s";

				});

				x[i].addEventListener("mouseout",function(){
					this.style.backgroundColor = "#fbfbfb";
					this.style.color = "#555";
					this.style.transition = "0.3s";


				});

			

		}
			
			correct.currentTime = 0;
			wrong.currentTime = 0;
			updateGame()

	}
			
}


		
function mute(){
	var muteBtn = document.querySelectorAll(".mute");
	backgroundSound.muted == true ? backgroundSound.muted = false: backgroundSound.muted = true;

	if (backgroundSound.muted) {
		muteBtn[0].innerHTML= "UNMUTE";
		muteBtn[1].innerHTML= "&#128266;";

	}else{
		muteBtn[0].innerHTML= "MUTE";
		muteBtn[1].innerHTML= "&#128263;";

	}
}


	// var x = 10;

	// function updateTime(){
		
	// 	if (x>0) {
	// 		x--;
	// 	}else{
	// 		clearInterval(updateTime);
	// 		x=10;
	// 	}
	// 	print(x);
	// 	document.querySelector("#timeBar").style.width = x*10+"%";

	// }	
		// setInterval(updateTime,1000);


