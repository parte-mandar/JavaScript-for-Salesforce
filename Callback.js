function callbackTeaser(callback, params) { // callbackTeaser() declaration
    console.log("Calling the callback");
    callback(params)
    console.log("Callback executed");
}
// Below function is executed as a callback function
function consoleMyDetails(person){
    if(person){
        console.log(`Hey, this is ${person.firstname}. I am a ${person.job}. My hobby is to ${person.hobby}`);
    }
}
// This concept is what we used in setTimeout also
// There we used setTimeout() and another function 'b' as parameter.
// Parameters to that function 'b' were simply passed as parameter to setTimeout()
// In that case, it was the timeout (in ms)
callbackTeaser(consoleMyDetails, { // callbackTeaser() definition
    firstname: 'Mandar',
    job: 'Salesforce developer',
    hobby: 'Learning new things'
})
