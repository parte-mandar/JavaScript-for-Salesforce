let aadhar = "920887266273"

maskedAadhar = aadhar.substring(8, 12)
console.log("Masked Aadhar: " + maskedAadhar.padStart(aadhar.length, "*"))