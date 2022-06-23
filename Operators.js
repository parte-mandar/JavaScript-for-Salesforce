// Assignment
let a = 10
console.log(a)

// Addition
let result = 0
for (let index = 1; index <= 10; index++) {
    result = result + index // Addition
}
console.log("Added numbers 1 to 10 results in " + result)
console.log(result + "20") // Since 20 is a string, addition will not happen, both will concatenate
console.log(result + 10 + "20") // first result + 10 will happen, then concatenation

// Subtraction 
console.log(result - "20") // This will actually subtract 20 from result, 20 converts integer
console.log(result - "twenty") // Since twenty is not a number, it results NaN

// Multiplication
console.log(result * "2") // Similar to subtract, 2 converts to integer

// Division
console.log(result / "2") // Similar to subtract, 2 converts to integer

// Modulus
console.log(result % "2") // Similar to subtract, 2 converts to integer

// Increment
let i = 0
while(i != 10){
    console.log(i + ". will print until i != 10")
    i++ // post-increment
}

console.log() // Empty line
i = 0
while(i != 10){
    ++i // pre-increment
    console.log(i + ". will print until i != 10")
}
console.log() // Empty line

// Decrement
i = 10
while(i != 0){
    console.log(i + ". will print until i != 0")
    i-- // post-decrement
}

console.log() // Empty line
i = 10
while(i != 0){
    --i // pre-decrement
    console.log(i + ". will print until i != 0")
}