class User{ //Parent Class
    constructor(name){
        this.name = name
    }
    sayNamo(){
        console.log(`Namaskaram ${this.name}, from the User class!`);
    }
}
class Admin extends User{ // Child class using extends keyword
    constructor(name){
        super(name); 
        // Super is used to call constructor of parent class
        // In this case, parent class is User.
        // Admin constructor passes name variable to the User constructor
    }
    sayNamaskaram(){
        console.log("Namaskaram " + this.name);
        // this.name is a variable defined in User class
        // Since User class is extended by Admin class, 
        // all its public variables and methods can be accessed in Admin
    }
}
let mandar = new Admin("Mandar")
mandar.sayNamaskaram() 
// This function exists in Admin class.
// It can be called by mandar, which is an Admin object.
mandar.sayNamo()
// This function exists in User class.
// Since User is extended by Admin, an Admin object can access that function too.

// ----------- Function overriding -----------
console.log();
// Following class will extend the same parent method
// Such type of inheritance is called Hierarchical Inheritance
class Employee extends User{
    constructor(name){
        super(name)
    }
    sayNamo(){
        console.log(`Namaskaram ${this.name}, from the Employee class!`);
    }
    // Here, sayNamo() is also present in User class.
    // Redeclaring function with same name and parameters is called Function Overriding.
}
let emp1 = new Employee("Mandar")
// Now if we call sayNamo() using emp1, 
// function will override and second function will get executed.
emp1.sayNamo()