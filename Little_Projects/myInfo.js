const customerInfo = [
    {
        customerId: 2379,
        firstname: "Mandar",
        lastname: "Parte",
        customerSinceYears: 4,
        email: "Mandar@mail.com"
    },
    {
        customerId: 12,
        firstname: "Manohar",
        lastname: "Shrotri",
        customerSinceYears: 14,
        email: "Manohar@mail.com"
    },
    {
        customerId: 4325,
        firstname: "Ramesh",
        lastname: "Kazare",
        customerSinceYears: 2,
        email: "Ramesh@mail.com"
    }
]

// find the one customer you want
const getCustomer = (id) => {
    for (let index = 0; index < customerInfo.length; index++) {
        const element = customerInfo[index];
        if (element.customerId == id) {
            return element
        }
    }
}

console.log("The desired customer is");
let customer = getCustomer(12)
console.group(customer.customerId)
console.log("Customer name - " + customer.firstname + " " + customer.lastname);
console.log("Customer since (in Years) - " + customer.customerSinceYears);
console.log("Customer email - " + customer.email);
console.groupEnd(customer.customerId)