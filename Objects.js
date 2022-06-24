let obj = {}
console.log(obj);

obj.name = "Mandar"
obj.age = 21
obj["Email"] = "mandar@mail.com"
console.log(obj);
console.log(obj.Email);
console.log(obj["age"]);

// Default object members
let user = {isAdmin: true}
console.log(user);

user.Title = "Major General"
console.log(user);

// Reference of 2 objects to same location
let obj2 = user
console.log(obj2);

obj2.Title = "Field Marshall"
console.log(obj2)
console.log(user) // Because obj2 also points to the same address, values in user also change.

user.Name = "Mandar"
console.log(obj2) // Even if changes are made to user object, obj2 will get changed
console.log(user)
