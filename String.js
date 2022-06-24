let str = "Apple, Mango, Coconut"

console.log(str.length)
console.log(str.slice(6,12))
console.log(str.slice(7,12))
console.log(str.slice(-12,-7))
console.log(str.substring(6,16))
console.log(str.substr(6,10)) // Depreciated
console.log(str.replace("Apple", "Grapes"))
console.log(str) // str.replace will not alter the original string

// str.replace features
let str2 = "H H H H AA"
console.log(str2.replace("H", "M")) // Here, M will replace H only once
console.log(str2.replace(/H/g, "M")) // Here, M will replace H at every occurance of H

// Below function str2.replaceAll is not supported in node yet, it works in browser console
// console.log(str2.replaceAll("H", "M")) // This works same as str2.replace(/H/g, "M")

// String Cases
console.log(str.toLowerCase())
console.log(str.toUpperCase())

if ("Apple".toLowerCase === "apple") {
    console.log("Apple lowered"); // This won't be printed
}
else if ("Apple".toLowerCase === "apple".toLowerCase) {
    console.log("Apple lowered in else if"); // This will be printed
}

// String trimming
let str3 = "   Namaskaram! Hare Krishna!    "
console.log(str3);
console.log(str3.trim());

str3 = str3.trim()
console.log(str3.padStart(str3.length + 5, '*'));
console.log(str3.padEnd(str3.length + 5, '*'));

//  Finding index
console.log(str.indexOf("Cocon"));
console.log(str.indexOf("Bocon")); // Returns -1 since Bocon doesnt exist
console.log(str.lastIndexOf("Cocon"));
console.log(str.lastIndexOf("Bocon")); // Returns -1 since Bocon doesnt exist

if (str.startsWith("Apple")) {
    console.log("Starts with Apple");
} else {
    console.log("DOesnt start with Apple")
}

if (str.endsWith("Apple")) {
    console.log("Ends with Apple");
} else {
    console.log("DOesnt End with Apple")
}

// Punctuation string
let strPunc = "Mandy"
let str5 = `Namaskaram! This is ${strPunc}` // Tilde (``) braces needs to be used for punctuation

console.log(str5);