// '==' doesnt check the datatype
if(10 == "10"){
    console.log(true)
}
else {
    console.log(false)
}

// '===' does check the datatype
if(10 === "10"){
    console.log(true)
}
else {
    console.log(false)
}
// '!=' and '!==' also work like this

// Exceptions
console.log("Exceptions..")
console.log(+0 == -0)
console.log(+0 === -0) // Both give same results

console.log(NaN == NaN)
console.log(NaN === NaN) // Both give same results
// To counter this exceptions, we can use Object.is()

// Object.is()
console.log("Object.is()..")
console.log(Object.is(+0, -0)) // This prints false
console.log(Object.is(NaN, NaN)) // This prints true
