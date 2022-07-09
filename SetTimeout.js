let myGreet = setTimeout(() => {
    console.log("Namaskaram");
}, 5000)
// Above function will take 5000ms (5secs) to execute
console.log(myGreet); // Timeout object displays all details of setTimeout execution

// --------- Passing function to setTimeout() ---------
let executeFunct = setTimeout(hello, 3000, "love")
// hello is to be declared later, still hello can be refered in setTimeout
function hello(varr) {
    console.error("Namaskaram, do this beautiful thing! " + varr);
}
// Notice that hello() executed befure myGreet().
// Because the timeout for hello() is 3000ms and for myGreet() its 5000ms
// While waiting for timeout, JavaScript executes remaining code and then executes the setTimeout() 

// --------- clearTimeout() ---------
// Sometimes it’s useful to be able to cancel a timer before it goes off.
// Here we cleared the hello() timeout and executed it again
clearTimeout(executeFunct) // First timeout is cleared
executeFunct = setTimeout(hello, 2000, "cutie") // This executes instead