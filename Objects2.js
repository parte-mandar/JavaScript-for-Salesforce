let user = Object.create({
    name: "Mandar", 
    age: 21,
    email: "Amytgingyiulike@gmail.cos"
})

console.log(user); // Object.create will return a blank object everytime

// Creating object from maps
let myMap = new Map()
myMap.set("name", "Mandar")
myMap.set("age", 21)
myMap.set("email", "Amytgingyiulike@gmail.cos")
console.log(myMap);

let mapObj = Object.fromEntries(myMap) // Converting map into object
console.log(mapObj);

// Object functions
console.log(Object.values(mapObj));
console.log(Object.keys(mapObj));
console.log(Object.entries(mapObj));

// Copy object without reference
console.log();
let obj2 = {...mapObj}
console.log(mapObj);
console.log(obj2);

mapObj.name = "Parte"
console.log(mapObj); // Change of name is not reflected in obj2 object
console.log(obj2);

// Copy object without reference [Method 2]
console.log();
let obj3 = Object.assign({}, mapObj)
console.log(obj3);
console.log(mapObj);

mapObj.name = "Mandar"
console.log(mapObj); // Change of name is not reflected in obj2 object
console.log(obj3);

// Copy object without reference [Method 3]
console.log();
let obj4 = JSON.parse(JSON.stringify(mapObj))
console.log(obj4);
console.log(mapObj);

mapObj.name = "Parte"
console.log(mapObj); // Change of name is not reflected in obj2 object
console.log(obj4);

// Object.seal
console.log();
Object.seal(mapObj)
mapObj.email = "test"
console.log(mapObj);

delete mapObj.email // It cannot delete the element as Object is sealed
console.log(mapObj); 

delete obj4.email // It will delete the element as Object is not sealed
console.log(obj4); 