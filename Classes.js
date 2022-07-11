class Person{ // Class declaration
    // A constructor
    constructor(name){
        this.name = name;
    }
    // A method
    sayMyName() {
        console.log(this.name);
    }
}
let mandar = new Person("Mandar")
// Here, variable 'mandar' becomes object of class 'Person'
console.log(typeof(mandar));
// Using this object, we can access class methods
mandar.sayMyName()
// We cam also access and change variables inside class using object
mandar.name = "Mandy"
mandar.sayMyName()

// ----------- Classes are actually functions -----------
console.log();
// Classes are referred to as special functions
// Classes are a template for creating objects.
console.log(typeof Person);
// Above code returns function as type

// ----------- Class declaration method 2 -----------
console.log();
let User = class{
    // methods and constructors
}
let user1 = new User()
console.log(typeof(user1));

// ----------- Class declaration method 3 -----------
console.log();
// Since class is a function type, 
// we can use function constructor to declare a class.
function Animal(name) { // Function constructor
    this.name = name;
}
Animal.prototype.sayName = function () { // Method
    console.log("This animal is called " + this.name);
}
// Note: Arrow functions can never be used as constructor functions.
// An error occurs when you declare above function as arrow function 
// Below commented code is what gave an exception, one may try
// ---------
// Animal.prototype.sayName = () => {
//     console.log("This animal is called " + this.name);
// }
// ---------
// Now we can create object, similar to previous methods
let animal1 = new Animal("Orangutan")
animal1.sayName()
