function generateWinningNumber () {
	return Math.ceil(Math.random() * 100);
}

function shuffle (array) {
	//the fisher-yates shuffle algorithm

	var m = array.length, t, i;

 	while (m) {
	    i = Math.floor(Math.random() * m--);
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }

	return array;
}

function Game () {
	this.playersGuess = null;
	this.pastGuesses = [];
	this.winningNumber = generateWinningNumber();
}

Game.prototype.difference = function () {
	if (this.playersGuess > this.winningNumber) {
		return (this.playersGuess - this.winningNumber);
	} else {
		return (this.winningNumber - this.playersGuess);
	}
}

Game.prototype.isLower = function () {
	
	if (this.playersGuess < this.winningNumber) {
		return true;
	}
	return false;
}

Game.prototype.playersGuessSubmission = function (guess) {

	if (guess < 1 || guess > 100 || guess === NaN || typeof guess !== "number") {
		throw("That is an invalid guess.");
	}
	this.playersGuess = guess;
	return this.checkGuess(guess);
}

Game.prototype.checkGuess = function (guess) {
	var message = "";
	//console.log("Players number -> " + guess);
	//console.log("Winning Number +++++ " + this.winningNumber);
	//console.log(this.pastGuesses.length + "Length");
	if (this.pastGuesses.length > 3) {
		//console.log("This is the guesses array" + this.pastGuesses);
		//console.log("You Lose")
		return "You Lose.";
	}

	if (this.pastGuesses.indexOf(guess) > -1) {
		//console.log('You have already guessed that number.');
		return 'You have already guessed that number.';
	}

	if (guess === this.winningNumber) {
		//console.log("You Win!");
		return "You Win!";
	} 

	this.pastGuesses.push(guess);

	if (this.difference() < 10) {
		return 'You\'re burning up!';
	}

	if (this.difference() < 25) {
		return 'You\'re lukewarm.';
	}

	if (this.difference() < 50) {
		return 'You\'re a bit chilly.';
	}

	if (this.difference() < 100) {
		return 'You\'re ice cold!';
	}
}

function newGame () {
	return new Game();
}

Game.prototype.provideHint = function () {
	var hintArray = shuffle([this.winningNumber, generateWinningNumber(), generateWinningNumber()]);
	return hintArray;
}



























