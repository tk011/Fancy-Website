var ttt1 = document.getElementById("ttt1");
var ttt2 = document.getElementById("ttt2");
var ttt3 = document.getElementById("ttt3");
var ttt4 = document.getElementById("ttt4");
var ttt5 = document.getElementById("ttt5");
var ttt6 = document.getElementById("ttt6");
var ttt7 = document.getElementById("ttt7");
var ttt8 = document.getElementById("ttt8");
var ttt9 = document.getElementById("ttt9");

var board = [];
var aiChoice = 0;
var aiSelect = "ttt" + String(aiChoice);

function play(value) {
	switch(value) {
		case 1:
			if(board.includes(1)) {} else {
				ttt1.innerHTML = "X";
				board.push(1);
				ai();}
			break;
		case 2:
			if(board.includes(2)) {} else {
				ttt2.innerHTML = "X";
				board.push(2);
				ai();}
			break;
		case 3:
			if(board.includes(3)) {} else {
				ttt3.innerHTML = "X";
				board.push(3);
				ai();}
			break;
		case 4:
			if(board.includes(4)) {} else {
				ttt4.innerHTML = "X";
				board.push(4);
				ai();}
			break;
		case 5:
			if(board.includes(5)) {} else {
				ttt5.innerHTML = "X";
				board.push(5);
				ai();}
			break;
		case 6:
			if(board.includes(6)) {} else {
				ttt6.innerHTML = "X";
				board.push(6);
				ai();}
			break;
		case 7:
			if(board.includes(7)) {} else {
				ttt7.innerHTML = "X";
				board.push(7);
				ai();}
			break;
		case 8:
			if(board.includes(8)) {} else{
				ttt8.innerHTML = "X";
				board.push(8);
				ai();}
			break;
		case 9:
			if(board.includes(9)) {} else {
				ttt9.innerHTML = "X";
				board.push(9);
				ai();}
			break;
	}
}

function ai() {
	generate();
}

function generate() {
	aiChoice = Math.floor((Math.random()*9)+1);
	console.log(aiChoice);
	if(board.includes(aiChoice)) {
		generate();
	}
	aiSelect.innerHTML = "0";
}