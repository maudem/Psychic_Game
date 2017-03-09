
// ===============My Pseudocode ==============
//The Computer guesses a random number from 0-9
//Capture choices

// The User tries to choose the right number
// Capture choices

// If the User chooses right, the message "Correct!!" displays, the round resets and 1 point is added to 'wins'

// If the User chooses wrong, the entry is displayed in 'Guesses so far' and 1 point is subtracted to 'Tries so far'

// After 5 wrong tries (or 'Tries so far'=0) Computer guess is displayed, 1 point is addled to 'losses' and round resets

// After 5 rounds, game is over and

// 5 or 4 wins display "clarvoyant master!"
// 3 wins display "maybe crystals could strengthen your power"
// 2 or 1 win display "Go home Normie!"//


//array of chioces 0-9
var choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var wins = 0;
var losses = 0;
var tries=5;
//capturing and logging the user guess try to hook it to the gues button
function checkguess(){
document.onkeyup = function() {
	var userGuess = document.getElementById('guess').value;}
		console.log(userGuess);
	

//the computer picks a random number and it is logged
	var compChoice = choices[Math.floor(Math.random()*choices.length)];
		console.log(compChoice);


var checkGuess = function () {

	if (userGuess === compChoice){
		 alert ("Yes!! Your are a clarvoyant master!");  
	}
	else {
		alert ("Concentrate!  Try again.");
		
	}

}
