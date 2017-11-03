// On clicking the keypad numbers
var number = "";

var notes= {
	thousand: 0, 
	fivehundred: 0, 
	twohundred: 0, 
	hundred: 0,
	fifty: 0 
}

var coinsLarger20 = {
	twenty:0,
	five: 0,
	two:0
}

var coinsSmaller20 = {
	ten: 0,
	one:0
}

var denomination = [1000, 500, 100,50,20,10,5,2,1];

function select(item) {

		number = number + item;
		console.log("value Selected:"+number);
		if(number.length <= 5){
		var element = document.getElementById('amount');
		element.innerHTML = number;
		} else{
			alert("You cannot select more !!");
		}
	};

// On clicking Submit button
function submit(){
	var element = document.getElementById('amount');
	console.log("Amount Submitted:"+element.innerHTML);
	var submitAmt = parseInt(element.innerHTML);
	for (var i = 0; i < denomination.length; i++) {
		var count = parseInt(submitAmt/denomination[i]); 
		if(count>=1){
			console.log( count+"X" + denomination[i]);
			deposit(count, denomination[i]);
			submitAmt = submitAmt % denomination[i]; console.log("remainder:"+ submitAmt);
		}
		
	}
}

function deposit(number, denom){

if(denom == 1000 || denom == 500 || denom == 100 || denom == 50 ){
	var parent = document.createElement("div");
	parent.className = "notesDeposited";
	var notesElement = document.createElement("p");
	parent.appendChild(notesElement);
	var node = document.createTextNode(number + " X "+ denom);
	notesElement.appendChild(node);
	var element = document.getElementById("notes");
	element.appendChild(parent);
}

if(denom == 20 || denom == 5 || denom == 2 ){
	var parent1 = document.createElement("div");
	parent1.className = "coinsDeposited";
	var notesElement1 = document.createElement("p");
	parent1.appendChild(notesElement1);
	var node1 = document.createTextNode(number + " X "+ denom);
	notesElement1.appendChild(node1);
	var element1 = document.getElementById("coinsLarge");
	element1.appendChild(parent1);
}


}
