var gamesPlayed = 0;
var wins = 0;
var losses = 0;

function counter () {
	gamesPlayed += 1;
	document.getElementById("counter").innerHTML = ("Games Played: " + gamesPlayed);
};

// Random dice roll function
var rollDice = function () {
	return Math.floor(Math.random() * 6 + 1);
};

// Win function
var win = function () {
	numberOfWins += 1;
	document.getElementById("wins").innerHTML = ("Wins: " + numberOfWins);
};

// user selection of 1-6 or random number
function setNumber (x) {
	document.getElementById("yourRoll").innerHTML = ("Your Roll: " + x + ".");
	myNum = rollDice();
	document.getElementById("myRoll").innerHTML = ("My Roll: " + myNum + ".");
	if (x == myNum) {
		document.getElementById("result").innerHTML = ("You win!");
		wins += 1;
	} else {
		document.getElementById("result").innerHTML = ("Sorry, please try again.");
		losses += 1;
	}
	var percent = ((wins/gamesPlayed) * 100).toFixed(2);
	document.getElementById("winloss").innerHTML = ("Wins / Losses: " + wins + " / " + losses);
	document.getElementById("percent").innerHTML = ("Win Percentage: " + percent + "%");
};


