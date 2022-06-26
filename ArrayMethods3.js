let nums = [23,545,43,657,5645,3243,515,453,54767]

// arr.filter(predicate function())
let newNums = nums.filter((currentValue, index, originalArray) => {
    return currentValue > 500
})
console.log(newNums);

// arr.find(predicate function())
let findNums = nums.filter((currentValue, index, originalArray) => {
    return currentValue === 515
})
console.log(findNums);

// arr.reduce(predicate function())
let arrr = [1,2,3,4,5,6,7,8,9,10]
let reduced = arrr.reduce((previousVal, currentValue, index, originalArray) => {
    previousVal += currentValue
    return previousVal
}, 0)
// This function traverses array from left to right
// We can traverse the array from right to left using arr.reduceRight(callback functn())
console.log(reduced);

// arr.reduceRight(predicate function())
let redurcedRight = arrr.reduceRight((previousVal, currentValue, index, originalArray) => {
    previousVal += currentValue
    return previousVal
}, 0)

console.log(redurcedRight);

// arr.sort() Method
console.log(nums.sort()); // This sorts array only by the first digit
console.log(
    nums.sort((a,b) => {
        return a = b // this prints same sort by first digit
    })
);
// this is needed in cases of strings, alphabetical orders

console.log(
    nums.sort((a,b) => {
        return a - b // this prints actual sort of numbers
    })
);
// This was sort in ascending order, for decending order, just use b - a

console.log(
    nums.sort((a,b) => {
        return b - a // this prints actual sort of numbers
    })
);