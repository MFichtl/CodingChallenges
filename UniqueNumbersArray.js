/*Create a function that will receive two arrays of numbers as arguments and return an array composed 
of all the numbers that are either in the first array or second array but not in both

For example:
var ar1 = [1, 2, 3, 4, 5];
var ar2 = [5, 9, 6, 2];
var ar3 = mergeExclusive(ar1, ar2);
ar3 should be equal to = [1, 3, 4, 9, 6]
*/

/*
Pseudocode:
1. combine both arrays
2. iterate through the combined array to look for repeating elements
3. push any non-repeating element to the already initialized array3 which is the final array.
*/

//let array1 = [1, 2, 3, 4, 5];
//let array2 = [5, 9, 6, 2];

function mergeExclusive(array1, array2){ 
	let array3 = []; 
  	let tempArray = array1.concat(array2);
  	for (let i=0; i<tempArray.length; i++){
    /*searching for the first instance an element appears in the array and if it appears again.
    if an element doesn't repeat, its initial index1(I1) will be the same as index2(I2) so we push 
    that element into array3.*/
      	if (tempArray.indexOf(tempArray[i]) == tempArray.lastIndexOf(tempArray[i])){
           array3.push(tempArray[i]);
    	}   
  	}
  return array3;
}
mergeExclusive([1, 2, 3, 4, 5],[5, 9, 6, 2]);

module.exports = mergeExclusive;
