var game = {
 choices : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 wins : 0,
 losses : 0,
 tries : 5
}

$(document).ready(function(){
//The Computer guesses a random number from 0-9
//Capture choices
 	var compChoice = game.choices[Math.floor(Math.random()*game.choices.length)];
 

//

//The User tries to choose the right number

	//resets round 
	var newRound = function() {
		game.wins();
		game.losses();
		game.tries = 5;
	}

	$("#userGuess").click(function(){
		//sets the inputted value to userGuess
		var userGuess = $("input").val();

		//put in validation for numbers 0-9
		if (compChoice === userGuess){
			alert("Correct!!!"); //alert when guessed right
			game.wins +=1;
		}

		else {  //alert when guessed wrong
			game.tries-=1;
			alert("Try Again. You have " + game.tries + " attemts left.  Concentrate!!");
		}

		if (game.tries == 0){
			game.losses+=1;
			alert("Sorry, the right answer is " + compChoice);
			newRound();
		}
		//append current score to appropriate ids
		$("#wins").empty();
		$("#losses").empty();

		$("#wins").append("Wins: " + game.wins);
		$("#losses").append("Losses: " + game.losses);

		
	});

	

});


	// 	}
	// }
// After 5 wrong tries (or 'Tries so far'=0) Computer guess is displayed, 1 point is added to 'losses' and round resets
//}
// After 5 rounds, game is over and

// 5 or 4 wins display "clarvoyant master!"
// 3 wins display "maybe crystals could strengthen your power"
// 2 or 1 win display "Go home Normie!"//


//array of chioces 0-9

//capturing and logging the user guess try to hook it to the gues button
	

//the computer picks a random number and it is logged
	



	
	