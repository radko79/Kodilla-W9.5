// scripts.js

var getButtonID = document.getElementById('btn'),
	getButtonClass = document.getElementsByClassName('button'),
	numberOfChildren = getButtonClass.length; 

console.log('Number of buttons: ' + numberOfChildren);

for (var i = 0; i < numberOfChildren; i++) {
	console.log(getButtonClass[i].innerText);
}
