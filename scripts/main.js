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
	myHeading.textContent = 'Welcome Back! Super-Cool User, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}

var myObj = { "name":"Sudhanshu", "age":18, "cars": null };
for (x in myObj) {
    document.getElementById("extra").innerHTML += x + " : "+ myObj[x] +"<br>";
}

var nestedObj = {"Hobbies":{"1":"Skating", "2":"Reading","3":"Programming"}}
for (x in nestedObj.Hobbies) {
	document.getElementById("hobbies").innerHTML += x + " : " + nestedObj.Hobbies[x] ;
}
myObj = {
    "name":"John",
    "age":30,
    "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
 }
 for (i in myObj.cars) {
    x += "<h3>" + myObj.cars[i].name + "</h3>";
    for (j in myObj.cars[i].models) {
        x +=" " + myObj.cars[i].models[j] + " ";
    }
}

document.getElementById("cars").innerHTML += x;
