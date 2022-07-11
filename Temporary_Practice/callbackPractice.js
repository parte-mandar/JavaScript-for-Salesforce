// 
// Note: This may not be understood later, its for temporary practice done at that time
// 
let executeFunct = setTimeout(hello, 3000, "love")
// hello is to be declared later, still hello can be refered in setTimeout
function hello(varr) {
    console.error("Namaskaram, do this beautiful thing! " + varr);
}


let executeFunct2 = setTimeout(function hello(varr) {
    console.error("Namaskaram, do this beautiful thing! " + varr);
}, 3000, "Phewweee")
// hello is to be declared later, still hello can be refered in setTimeout


function callbackTeaser(callback, params) { // callbackTeaser() declaration
    console.log("Calling the callback");
    callback(params)
    console.log("Callback executed");
}

callbackTeaser(function consoleMyDetails(person){
    if(person){
        console.log(`Hey, this is ${person.firstname}. I am a ${person.job}. My hobby is to ${person.hobby}`);
    }
}, { // callbackTeaser() definition
    firstname: 'Mandar',
    job: 'Salesforce developer',
    hobby: 'Learning new things'
})