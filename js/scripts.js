// scripts.js

var getButtonID = document.getElementById('btn'),
	getButtonClass = document.getElementsByClassName('button'),
	numberOfChildren = getButtonClass.length,
	buttonText = getButtonID.innerText,
	i = 1;

console.log('Number of buttons: ' + numberOfChildren);

for (i = 1; i <= numberOfChildren; i++) {
	console.log(buttonText.childNodes[i]);
}
