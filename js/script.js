function calculateAge() {

	// body...
	
		var enteredBirthYear = document.getElementById('birthYear').value;
		var testBirthYear = parseFloat(enteredBirthYear);
		console.log(testBirthYear);

			var currentYear = new Date();
			birthYear = new Date(enteredBirthYear);
			var timeDiff = Math.abs(birthYear.getTime() - currentYear.getTime());
			var actualdiffYears = Math.ceil(timeDiff / (365.5*1000 * 3600 * 24)); 

			var enteredCurrentYear =  document.getElementById('currentYear').value;
			var usersCurrentYear = new Date(enteredCurrentYear);
			
			var timeDiff2 = Math.abs(birthYear.getTime() - usersCurrentYear.getTime());
			var diffYears = Math.ceil(timeDiff2 / (365.5*1000 * 3600 * 24));

				//var message = "You are either " + diffYears + " years or " + (diffYears - 1)
				//+ " years old, but you are more likely to be "+ (actualdiffYears-1) 
				//+ " years old on the current date: " + currentYear.toDateString();
				//alert(message);
				document.getElementById("modal_text").innerHTML = "You are either " + diffYears + " years or " + (diffYears - 1)
				+ " years old, but you are more likely to be "+ (actualdiffYears-1) 
				+ " years old on the current date: " + currentYear.toDateString();
				$("#myModal").modal();
}


function calculateSupply() {
	// body...
	var enteredCurrentAge = document.getElementById('age').value;
	console.log(enteredCurrentAge);
	var age = parseFloat(enteredCurrentAge);
	var enteredNoOfPackets = document.getElementById('snackPerDay').value;
	var snackNoPerDay = parseFloat(enteredNoOfPackets);
	var max_age = 100;
	var diffAge = max_age - age;
	console.log(diffAge);
	var lifeSupply = Math.round(snackNoPerDay*365*diffAge + diffAge%4) ;
	console.log(lifeSupply);
	document.getElementById("modal_text").innerHTML = "You will need "+ lifeSupply + 
	" of packets of snacks to last you until the ripe old age of " + max_age + " years.";
	//alert(message);
	$("#myModal").modal();


}
function calculateCircumference() {
	// body...
	var enteredRadius = document.getElementById('radius').value;
	console.log(enteredRadius);
	var rad = parseFloat(enteredRadius);
	var circum = Math.ceil(2*Math.PI*rad);
	console.log(circum);
	document.getElementById("modal_text").innerHTML = "The circumference is "+ circum + " cm.";
	$("#myModal").modal();

}

function calculateArea(){
	var enteredRadius = document.getElementById('radius').value;
	console.log(enteredRadius);
	var rad = parseFloat(enteredRadius);
	var area = Math.ceil(Math.PI * rad * rad);
	console.log(area);
	document.getElementById("modal_text").innerHTML = "The area of the circle is "+area +" cm" + "<sup>2</sup>";
	$("#myModal").modal();

}

function calculateFarenheit() {
	// body...
	var enteredCel = document.getElementById('enteredCelsius').value;
	console.log(enteredCel);
	var Cel = parseFloat(enteredCel);
	var Far = Math.round(Cel*9/5+32);
	console.log(Far);
	document.getElementById("modal_text").innerHTML = Cel + "&#8451;" + " is " + Far +  "&#8457;";
	$("#myModal").modal();
}

function calculateCelsius() {
	var enteredFar = document.getElementById('enteredFarenheit').value;
	console.log(enteredFar);
	var Farh = parseFloat(enteredFar);
	var Cels = Math.round((Farh-32)*5/9);
	console.log(Cels);
	document.getElementById("modal_text").innerHTML = Farh + "&#8457;" + " is " + Cels + "&#8451;"; 
	$("#myModal").modal();
}

