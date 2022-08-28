// Synchronous
 
console.log("I");
console.log("eat");
console.log("Ice cream");
console.log("with a");
console.log("spoon");

// Asynchronous

setTimeout(() => {
    console.log("and drink in a cup!");
}, 4000)

console.log("and eat in a plate"); // This is printed before setTimeout()

// Callbacks

function one(step2){
    console.log("Step1");
    step2()
}
function two(){
    console.log("Step2");
}

one(two)
