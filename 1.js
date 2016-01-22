'use strict';

// Write a function that takes an array of numbers,
// and returns a new array with the same length but all,
// of it's elements are the triple of the original array's elements!
 
 function tripleEachElement(list) {
	var output = [];
	list.forEach(function(item) {
		output.push(item * 3);
	});
	return output;
}






console.log(tripleEachElement([4, 6, 3, 2])); // [12, 18, 9, 6]
