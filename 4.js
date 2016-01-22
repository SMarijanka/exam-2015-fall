'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.
function countLetters(string) {
	var stringList = string.split('');
	var output = {};
	stringList.forEach(function(letter) {
		if(!(letter in output)) {
			output[letter] = 0;
		}
		output[letter]++;
	});
	return output;
}




console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
