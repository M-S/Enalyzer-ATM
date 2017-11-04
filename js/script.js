
var number = ""; //Variable that stores the amount selected
var denomination = [1000, 500, 100,50,20,10,5,2,1]; //Array containing all money types


/*** On clicking the keypad numbers**/
function select(item) {
		number = number + item;
		//console.log("value Selected:"+number);
		if(number <= 100000){
		var element = document.getElementById('amount');
		element.innerHTML = number;
		} else{
			number = number.slice(0,-1);
			alert("You cannot select more than £100,000 !!");
		}
	};

/*** When Clear key is selected**/
function clearValue(){
	console.log("Clear!!");
	number = number.slice(0,-1);
	//console.log("after clearíng number:"+number);
	var element = document.getElementById('amount');
	element.innerHTML = number;
}	

/*** On clicking Submit button**/
function submit(){
	var element = document.getElementById('amount');
	//console.log("Amount Submitted:"+element.innerHTML);
		document.getElementById('deposit-amount').innerHTML = element.innerHTML;
		var submitAmt = parseInt(element.innerHTML);
		if(submitAmt>=1){
			for (var i = 0; i < denomination.length; i++) {
				var count = parseInt(submitAmt/denomination[i]); 
			if(count>=1){
				console.log( count+"X" + denomination[i]);
				deposit(count, denomination[i]);
				submitAmt = submitAmt % denomination[i]; //console.log("remainder:"+ submitAmt);
			}
		
			} 
			}else{
				//console.log("No amount selected");
				errorMessage();
		}
			
	
}

/***Function to display the different denomination in view2**/

function deposit(number, denom){

//First Box containing notes
if(denom == 1000 || denom == 500 || denom == 100 || denom == 50 ){
	var parent = document.createElement("div");
	parent.className = "notesDeposited row";
	var designOuter = document.createElement("div");
	designOuter.className = ('noteDesignOuter sm-5');
	parent.appendChild(designOuter);

	var designInner = document.createElement("div");
	designInner.className = ('noteDesignInner');
	designOuter.appendChild(designInner);

	var notesElement = document.createElement("div");
	notesElement.className = ('sm-7');
	parent.appendChild(notesElement);

	var text = document.createElement("p");
	notesElement.appendChild(text);
	var node = document.createTextNode(number + " X "+ denom);
	text.appendChild(node);	

	var element = document.getElementById("notes");
	element.appendChild(parent);
}

//Second Box containing coins larger than 20mm diameter
if(denom == 20 || denom == 5 || denom == 2 ){
	var parent1 = document.createElement("div");
	parent1.className = "coinsDeposited row";
	var designOuter1 = document.createElement("div");
	designOuter1.className = ('coinDesignOuter sm-5');
	parent1.appendChild(designOuter1);

	var designInner1 = document.createElement("div");
	designInner1.className = ('coinDesignInner');
	designOuter1.appendChild(designInner1);

	var notesElement1 = document.createElement("div");
	notesElement1.className = ('sm-7');
	parent1.appendChild(notesElement1);

	var text1 = document.createElement("p");
	notesElement1.appendChild(text1);
	var node1 = document.createTextNode(number + " X "+ denom);
	text1.appendChild(node1);	

	var element1 = document.getElementById("coinsLarge");
	element1.appendChild(parent1);
}

//Third Box containing coins smaller than 20mm diameter
if(denom == 10 || denom == 1){
	var parent2 = document.createElement("div");
	parent2.className = "coinsDeposited row";
	var designOuter2 = document.createElement("div");
	designOuter2.className = ('coinDesignOuter sm-5');
	parent2.appendChild(designOuter2);

	var designInner2 = document.createElement("div");
	designInner2.className = ('coinDesignInner');
	designOuter2.appendChild(designInner2);

	var notesElement2 = document.createElement("div");
	notesElement2.className = ('sm-7');
	parent2.appendChild(notesElement2);

	var text2 = document.createElement("p");
	notesElement2.appendChild(text2);
	var node2 = document.createTextNode(number + " X "+ denom);
	text2.appendChild(node2);	

	var element2 = document.getElementById("coinsSmall");
	element2.appendChild(parent2);
}

}

/***Function to display error message if no amount is selected**/
function errorMessage(){
	var message = document.createElement("p");
	message.className = "text-center";
	var node = document.createTextNode("ERROR !! No amount was selected");
	message.appendChild(node);	
	var element = document.getElementById("error");
	element.appendChild(message);
}