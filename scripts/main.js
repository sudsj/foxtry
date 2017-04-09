var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox.jpg'){
		myImage.setAttribute('src', 'images/chrome.png');
		document.querySelector('h1').textContent = 'Chrome Ahoy!';
	}
	else{
		myImage.setAttribute('src', 'images/firefox.jpg');
		document.querySelector('h1').textContent = 'Firefox is back!';
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter you name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hi Super-Cool User, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hi Super-Cool User, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
