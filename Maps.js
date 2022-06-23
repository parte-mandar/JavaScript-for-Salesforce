const mapp = new Map()

mapp.set("FirstName", "John")
mapp.set("LastName", "Doe")
mapp.set("FirstName", "Harii")

console.log(mapp)

console.log(mapp.has("FirstName"))
console.log(mapp.has("Firstname"))
console.log(mapp.get("FirstName"))

mapp.delete("FirstName")
console.log(mapp)

mapp.set("Phone", "1111111111")
console.log(mapp.keys())
console.log(mapp.values())
console.log(mapp.entries())
console.log(mapp.size)

mapp.clear()
console.log(mapp)
