const d = new Date();
console.log(typeof(d))
console.log(d)

const now = new Date(Date.now())

console.log("Right now it's: " + now)
console.log(now.getDay())
console.log(now.getYear())
console.log(now.getFullYear())
console.log(now.toLocaleDateString('en-Us'))
