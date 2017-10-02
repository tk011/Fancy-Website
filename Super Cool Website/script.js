var rainbow = ["red","orange","yellow","green","blue","purple"];
var step = 0;
var maxStep = rainbow.length;

var title = document.getElementById("titleText");
var cT = document.getElementById("coolText");
var moneyText = document.getElementById("moneyText");
var spinPowBtn = document.getElementById("spinPowBtn");
var spinPowAmount = document.getElementById("spinPowAmount");

setInterval(function() {
	title.style.color = rainbow[step];
	step +=1;
	if(step == maxStep) {
		step = 0;
	}
},100)

var degress = 0;
var spins = 0;
var speed = 0;
var speedPower = 1;
var totalSpinPow = 0;
var overspin = 0;

setInterval(function() {
	cT.style.transform = 'rotate(' + degress + 'deg)';
	degress += speed;
	speed = speed-speed/150;
	if(degress >= 360) {
		overspin = 360 - degress;
		degress = overspin;
		addSpins();1
	}
	if(speed <= 0.15) {
		speed = 0;
	}
},10)

function spin() {
	speed += speedPower;;
}
function addSpins() {
	spins += 1;
	moneyText.innerHTML = "Spins: " + spins;
}

function upSpinPow() {
	if(spins >= 10) {
		speedPower += 1;
		spins -= 10;
		totalSpinPow += 1;
		moneyText.innerHTML = "Spins: " + spins;
		spinPowAmount.innerHTML = totalSpinPow;
		spinPowBtn.innerHTML = "Cost: " + 10;
	}
}