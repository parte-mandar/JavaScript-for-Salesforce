const sett = new Set()
console.log(sett)

// Adding numbers from 0 - 9
for (let index = 0; index < 10; index++) {
    sett.add(index)
}
console.log(sett)
sett.clear()

// Adding same number in every iteration, its added only once
for (let index = 0; index < 10; index++) {
    sett.add(10)
}
console.log(sett)

// Testing has() functn
if(sett.has(7)){
    console.log("sett has 7")
}
else{
    console.log("sett doesnt have 7")
}

console.log(sett.size)