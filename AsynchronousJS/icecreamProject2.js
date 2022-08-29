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

// Returns time for every activity
let time = (ms) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop is closed, sorry!!"))
        }
    })
}

let kitchen = async () => {
    try{
        await time(2000)
        console.log(`Great choice, we'll get you the best ${stocks.fruits[0]} icecream`);
        console.log("Starting the Production");
        
        console.log("Cutting fruits");
        await time(2000)

        console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
        await time(1000)

        console.log(`Starting the machine`);
        await time(1000)

        console.log(`We're getting your ${stocks.holder[0]}`);
        await time(2000)

        console.log(`Adding ${stocks.toppings[1]} toppings`);
        await time(3000)

        console.log(`We're getting you the magic!!`);
        await time(2000)

        console.log("Here!! Please enjoy your icecream");
    }
    catch(error){
        console.log("Customer left\n", error);
    }
    finally{
        console.log("Shop closed!!");
    }
}

kitchen()
.then(() => {
    console.log("test");
})