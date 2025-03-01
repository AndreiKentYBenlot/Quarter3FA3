var name= prompt("Hi player! Login with your account name: ");
document.getElementById("title").innerHTML = name;

function generateValues() {
	// Generate three random numbers (0-20)
	let num1 = Math.random() * 20;
	let num2 = Math.random() * 20;
	let num3 = Math.random() * 20;

	// Round numbers up
	let newNum1 = Math.ceil(num1);
	let newNum2 = Math.ceil(num2);
	let newNum3 = Math.ceil(num3);

	// Find the largest number
	let largest = Math.max(newNum1, newNum2, newNum3);
	
	generatedNumbers = [newNum1, newNum2, newNum3];
	document.getElementById("games").innerHTML=generatedNumbers[0];
	document.getElementById("kills").innerHTML=generatedNumbers[1];
	document.getElementById("deaths").innerHTML=generatedNumbers[2];

	// Get the nth letter from the alphabet (A=1, B=2, ...)
	let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let letter = alphabet[newNum1 - 1] || "Z";

	// Calculate total minutes and convert to hours and minutes
	let totalMin = newNum2 * newNum3;
	let hrs = Math.floor(totalMin / 60);
	let min = totalMin % 60;
	
	if(largest>=18&largest <=20){
		alert("WOW! You are at a very high level!");
	}
	if (hrs<=1 & min<=30){
		alert("The time event is near! Prepare your equipments!");
	}
	// Display generated numbers
	let numbersText = `
		<strong>Generated Numbers (Before Rounding):</strong> ${num1.toFixed(2)}, ${num2.toFixed(2)}, ${num3.toFixed(2)}<br>
		<strong>Rounded Numbers:</strong> ${newNum1}, ${newNum2}, ${newNum3}<br><br>
	`;

	// You can now create your own story here using these values
	let storyText = `
		<strong>PLAYER STATS:</strong><br>
		PLAYER LEVEL: <strong>${largest}</strong><br>
		You are ranked top ${newNum1} in the <strong>${letter}</strong> guild<br>
		<em>(The guild is stronger when it is closer to T-TRANSCENDENT)</em> <br>
		Another time event will be in: <strong>${hrs} hour(s) and ${min} minutes</strong>. BE READY!<br>
	`;

	document.getElementById("numbers").innerHTML = numbersText;
	document.getElementById("story").innerHTML = storyText;

}