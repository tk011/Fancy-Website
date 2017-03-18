var ttt1 = document.getElementById("ttt1");
var ttt2 = document.getElementById("ttt2");
var ttt3 = document.getElementById("ttt3");
var ttt4 = document.getElementById("ttt4");
var ttt5 = document.getElementById("ttt5");
var ttt6 = document.getElementById("ttt6");
var ttt7 = document.getElementById("ttt7");
var ttt8 = document.getElementById("ttt8");
var ttt9 = document.getElementById("ttt9");
var tttWinsText = document.getElementById("tttWinsText");
var tttLossesText = document.getElementById("tttLossesText");

var board = [];
var tttAiChoice = 0;
var tttLosses = 0;
var tttWins = 0;


function play(value) {
	switch(value) {
		case 1:
			if(board.includes(1)) {} else {
				ttt1.innerHTML = "X";
				board.push(1);
				tttAi();}
			break;
		case 2:
			if(board.includes(2)) {} else {
				ttt2.innerHTML = "X";
				board.push(2);
				tttAi();}
			break;
		case 3:
			if(board.includes(3)) {} else {
				ttt3.innerHTML = "X";
				board.push(3);
				tttAi();}
			break;
		case 4:
			if(board.includes(4)) {} else {
				ttt4.innerHTML = "X";
				board.push(4);
				tttAi();}
			break;
		case 5:
			if(board.includes(5)) {} else {
				ttt5.innerHTML = "X";
				board.push(5);
				tttAi();}
			break;
		case 6:
			if(board.includes(6)) {} else {
				ttt6.innerHTML = "X";
				board.push(6);
				tttAi();}
			break;
		case 7:
			if(board.includes(7)) {} else {
				ttt7.innerHTML = "X";
				board.push(7);
				tttAi();}
			break;
		case 8:
			if(board.includes(8)) {} else{
				ttt8.innerHTML = "X";
				board.push(8);
				tttAi();}
			break;
		case 9:
			if(board.includes(9)) {} else {
				ttt9.innerHTML = "X";
				board.push(9);
				tttAi();}
			break;
	}
	tttCheckPlayer();
}

function tttAi() {
	generate();
}

function generate() {
	tttAiChoice = Math.floor((Math.random()*9)+1);
	if(board.includes(tttAiChoice) && board.length < 8) {
		generate();
	} else {
		switch(tttAiChoice) {
			case 1:
				ttt1.innerHTML = "O";
				board.push(1);
				break;
			case 2:
				ttt2.innerHTML = "O";
				board.push(2);
				break;
			case 3:
				ttt3.innerHTML = "O";
				board.push(3);
				break;
			case 4:
				ttt4.innerHTML = "O";
				board.push(4);
				break;
			case 5:
				ttt5.innerHTML = "O";
				board.push(5);
				break;
			case 6:
				ttt6.innerHTML = "O";
				board.push(6);
				break;
			case 7:
				ttt7.innerHTML = "O";
				board.push(7);
				break;
			case 8:
				ttt8.innerHTML = "O";
				board.push(8);
				break;
			case 9:
				ttt9.innerHTML = "O";
				board.push(9);
				break;
		}
	tttCheckAi();
	}
}

function tttCheckAi() {
	//Check Row
	if(ttt1.innerHTML == "O" && ttt2.innerHTML == "O" && ttt3.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(ttt4.innerHTML == "O" && ttt5.innerHTML == "O" && ttt6.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(ttt7.innerHTML == "O" && ttt8.innerHTML == "O" && ttt9.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	//Check Column
	else if(ttt1.innerHTML == "O" && ttt4.innerHTML == "O" && ttt7.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(ttt2.innerHTML == "O" && ttt5.innerHTML == "O" && ttt8.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(ttt3.innerHTML == "O" && ttt6.innerHTML == "O" && ttt9.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	//Check Cross
	else if(ttt1.innerHTML == "O" && ttt5.innerHTML == "O" && ttt9.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(ttt3.innerHTML == "O" && ttt5.innerHTML == "O" && ttt7.innerHTML == "O") {
		tttLosses += 1;
		tttLossesText.innerHTML = "Losses: " + tttLosses;
		tttReset();
	}
	else if(board.length >= 10) {
		tttReset();
	}
}

function tttCheckPlayer() {
	//Check Row
	if(ttt1.innerHTML == "X" && ttt2.innerHTML == "X" && ttt3.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(ttt4.innerHTML == "X" && ttt5.innerHTML == "X" && ttt6.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(ttt7.innerHTML == "X" && ttt8.innerHTML == "X" && ttt9.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	//Check Column
	else if(ttt1.innerHTML == "X" && ttt4.innerHTML == "X" && ttt7.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(ttt2.innerHTML == "X" && ttt5.innerHTML == "X" && ttt8.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(ttt3.innerHTML == "X" && ttt6.innerHTML == "X" && ttt9.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	//Check Cross
	else if(ttt1.innerHTML == "X" && ttt5.innerHTML == "X" && ttt9.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(ttt3.innerHTML == "X" && ttt5.innerHTML == "X" && ttt7.innerHTML == "X") {
		tttWins += 1;
		tttWinsText.innerHTML = "Wins: " + tttWins;
		tttReset();
	}
	else if(board.length >= 10) {
		tttReset();
	}
}
function tttReset() {
	board.length = 0;
	ttt1.innerHTML = "1";
	ttt2.innerHTML = "2";
	ttt3.innerHTML = "3";
	ttt4.innerHTML = "4";
	ttt5.innerHTML = "5";
	ttt6.innerHTML = "6";
	ttt7.innerHTML = "7";
	ttt8.innerHTML = "8";
	ttt9.innerHTML = "9";
}