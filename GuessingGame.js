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
