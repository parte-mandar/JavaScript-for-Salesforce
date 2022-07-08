// -------- All console methods --------
// Just print console
console.log(console);
// Notice that console is an object.
// log, warn, error, etc are properties of that object
// Values of those properties are functions returning their work 

// -------- console.log() --------
console.log(); // For spacing
console.log("Namaskaram!");

// -------- console.debug() --------
// this function does same as console.log();
console.debug("Namaskaram, debug!")

// -------- console.error() --------
console.error("Namaskaram, this is an error!!");
// On a browser, this will act as error in code

// -------- console.table() --------
console.log();
let userList = [
    {fName:"Mandar", lName:"Parte"},
    {fName:"Rakesh", lName:"Natwarlal"},
    {fName:"Raju", lName:"Patwardhan"},
    {fName:"Sujay", lName:"Sim"}
]
// You can print the userList using console.log
console.log("List", userList);
// But in order to see the userList in form of table, we can
console.table(userList);
// When we have such data, list of objects, etc. We can use table

// -------- console.group(), console.groupEnd() --------
console.log();
console.log("Namaskaram");
console.group("grp") // "grp" is the label which is used to identify groupEnd
// Whatever after "grp" group will be part of that group until groupEnd
console.log("Line 1 of grp");
console.log("Line 2 of grp");
console.log("Line 3 of grp");
console.groupEnd("grp") // This ends the group
// group and groupEnd must have same parameter
// Depending on browser, it displays in console as dropdown or something
// Nested group is also possible
// A little project 'myInfo.js' is created on this, in Little_Projects folder

// -------- console.time() --------
console.log();
// It calculates the execution time of a piece of code
// considering previous group example
console.time("Exec of grp") // Similar to group, this is used to start time calculation
// Time of execution of whatever comes after is calculated
console.log("Namaskaram");
console.group("grp") 
console.log("Line 1 of grp");
console.log("Line 2 of grp");
console.log("Line 3 of grp");
console.groupEnd("grp") 
console.timeLog("Exec of grp") // This prints the time that went for executing the code block
console.timeEnd("Exec of grp") // Exits time calculation, this too prints time like timeLog
// timeLog cannot be used outside time and timeEnd