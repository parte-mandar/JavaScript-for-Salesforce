let users = [
    {name: "Mandar", email: "", employeeID: 713},
    {name: "Rahul", email: "", employeeID: 5435},
    {name: "Shankar", email: "", employeeID: 7567},
    {name: "Spruha", email: "", employeeID: 456},
    {name: "Rakesh", email: "", employeeID: 67},
    {name: "Sumit", email: "", employeeID: 2445},
    {name: "Pallavi", email: "", employeeID: 577}
]
console.log(users);

// adding company emails to their names
console.log();
users.forEach(employee => {
    employee.email = employee.name + "." + employee.employeeID + "@company.com"
});
console.log(users);

// Sorting based on employeeID
console.log();
users.sort((a,b) => {
    return a.employeeID - b.employeeID
})
console.log(users);

// Sorting based on name
console.log();
users.sort((a,b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1
    }
    else if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1
    }
    return 0; // If both are equal
})
console.log(users);