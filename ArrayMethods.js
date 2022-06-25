// array.concat() method
let users = ["John", "Allen", "Boris"]
users = users.concat(["Joe", "Anthony", "Jacinda"])
console.log(users); 

// array.every() method
console.log();
console.log(
    users.every(function (currentVal, index, arrr) {
        console.log(index + " " + arrr);
        return typeof(currentVal) == typeof("") // Type of all values in users is string, so returns true
    })
);
// Function passed as parameter to array.every() method contains following:
// function (currentValue, indexOfArray, completeArray) {body}
// Even though console.log statements run like in loop, the return statement returns only one value.
// Runs until condition becomes false, Returns true if all values meet the condition

// array.some() method
console.log();
console.log(
    users.some(function (currentVal, index, arrr) { 
        console.log(index + " " + arrr);
        return currentVal == "Hunter" // If even one values in users is Joe, it returns true
    })
);
// Works similar to array.every()
// Returns true even if one value meets the condition

// Convert from other data structure to array
console.log();
let sett = new Set()
sett.add(823)
sett.add(822)
sett.add(7623)
sett.add(5632)

let arrr = Array.from(sett) // Set to Array
console.log(arrr);
console.log(typeof(arrr));
console.log(typeof(sett)); 
// Type of array, set, map or any data structure in JS is always object

let str = "This is a String!"
console.log(Array.from(str)); // Every character, including blank spaces, become elements of array

// Array.isArray()
console.log(Array.isArray(arrr)); // This works rather than using typeof()

// Two ways of writing foreach()
console.log();
let result = ""
Array.from(str).forEach(function (currentVal, index, arr) { // Method 1: normal function
    result = result + currentVal
    console.log(index + " - " + result);
})

result = ""
console.log();
Array.from(str).forEach((currentVal, index, arr) => { // Method 2: arrow function
    result = result + currentVal
    if(index == arr.length-1)
        console.log("Sentence - " + result);
})

// array.includes() Method
console.log();
console.log(users.includes("Jacinda"));
console.log(users.includes("Xi"));

// array.indexOf() Method
console.log();
console.log(users.indexOf("Jacinda"));
console.log(users.indexOf("Xi")); // Returns -1 since Xi doesn't exist in array

// array.join() Method
console.log();
console.log(users.join());
console.log(users.join().split(','));
console.log(users.join(" - "));
