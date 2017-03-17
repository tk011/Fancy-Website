var infoContent = document.getElementById("infoContent");
var testContent = document.getElementById("testContent");
var info = document.getElementById("info");
var test = document.getElementById("test");

function show(value) {
	value.style.display = "block";
}

function hide(value) {
	value.style.display = "none";
}

function menuSelect(value) {
	value.style.textDecoration = "underline";
}

function menuDeselect(value) {
	value.style.textDecoration = "none";
}
