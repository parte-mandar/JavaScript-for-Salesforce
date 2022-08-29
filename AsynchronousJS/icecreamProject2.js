// Tutorial article: https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// Icecream making steps
// #1 Place Order - 2sec
// #2 Cut The Fruit - 2sec
// #3 Add water and ice - 1sec 
// #4 Start the machine - 1sec
// #5 Select Container - 2sec 
// #6 Select Toppings - 3sec 
// #7 Serve Ice Cream - 2sec

let is_shop_open = true

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = async () => {
    try{
        await abc;
    }
    catch(error){
        console.log("this is error\n", error);
    }

    finally{
        console.log("finally");
    }
} 

order()
.then(() => {
    console.log("lorem");
    console.log();
})

let toppingsChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Which toppings would you love!!!"))
        }, 3000)
    })
}

async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");
    await toppingsChoice()
    console.log("D");
    console.log("E");

}

kitchen()
.then(() => {
    console.log("Then I'll chill");
})
.then(() => {
    console.log("Then I'll close the shop");
})


console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking other orders");

