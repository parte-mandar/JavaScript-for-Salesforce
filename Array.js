let fruits = [];
console.log(fruits);
fruits = ["Apple", "Mango"]
console.log(fruits);
console.log(fruits[0]);

fruits.forEach(fruit => {
    console.log(fruit);
});

delete fruits[0]
console.log(fruits);
console.log(fruits[0]);

// In JS, array works like a list in python
// It can contain values of multiple types
// It can also contain array within array
let arr = ["one", 2, "three", 4.0, [5, 6, "seven"]]
console.log(arr);
console.log(arr[3]);
console.log(arr[4]); // Prints the array [5,6,"seven"]
console.log(arr[4][1]); // Prints second element of array within array