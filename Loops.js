let myArr = ["Apples", "Peers", "Coconuts"]

// ForEach
console.log("ForEach");
myArr.forEach(element => {
    console.log(element);
});

// Traditional For loop
console.log();
console.log("Traditional For loop");
let len = myArr.length
for (let index = 0; index < len; index++) {
    console.log(myArr[index]);
}

// For in and For of
console.log();
console.log("For in");
let mapp = new Map();
mapp.set("Name", "Mandar")
mapp.set("Email", "Mandar@mail")
mapp.set("age", 21)
let mappObj = Object.fromEntries(mapp) 

for (let key in mappObj) { // Here, in keyword is used for looping through object
    console.log(mappObj[key]);
}

for (let x of mapp) { // Here, of keyword is used for looping through map
    console.log(x);
}

for (let [key,value] of mapp) { 
    console.log(key + ":- " + value);
}

// while and do while loop
let i = 0
while (i<=10) {
    console.log(i);
    i+=2
}

do{
    console.log("Do " + i); // Even though i = 12 this line was executed
}
while(i <= 10)