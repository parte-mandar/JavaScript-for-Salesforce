let arrr = []

// arr.push() Method
for (let index = 0; index < 10; index++) {
    arrr.push(index+1)
}
arrr.push(100, 233, 445, 93, 333, 523, 5677) 
// all the values in the parameters will be added to the array
// there can be n number of parameters
console.log(arrr);
arrr.push([1,2,3]) // This line pushes an array to the arrr array
console.log(arrr);

// arr.pop() Method
console.log();
console.log(arrr.pop()); // Last element of the arrr array is deleted
console.log(arrr);

// arr.shift() Method
console.log();
console.log(arrr.shift()); // First element of the arrr array is deleted
console.log(arrr);

// arr.unshift() Method
console.log();
console.log(arrr.unshift(1)); 
// An element will be added as first element of arrr array
// the method returns new length of the array
console.log(arrr);

// arr.slice() Method
console.log();
console.log(arrr.slice(4,10));

// arr.splice() Method
console.log();
console.log(arrr);
console.log(arrr.splice(4, 1, 10)); // at index 4, one value is removed and value 10 is added on that index
console.log(arrr);
// function contains parameters in 3 parts
// splice(indexFrom, numOfElements, newElements...)
// indexFrom - Index from which splicing must start
// numOfElements - Number of elements to be spliced
// newElements - (Optional) Elements to be added in place of numOfElements

// Method returns the resulting removed array. 
// If numOfElements is 0, then method returns empty array
// if numOfElements is 0, then newElements are simply added from indexFrom index.
// If only one parameter is provided, it is considered indexFrom, 
// and that element and every element after that will be spliced

// arr.toString() Method
console.log();
console.log(arrr.toString()); // Converts to string with commas (,)
console.log(arrr.join("=")); // converts to string with anything in parameter