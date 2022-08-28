// Tutorial article: https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// Icecream making steps
// #1 Place Order - 2sec
// #2 Cut The Fruit - 2sec
// #3 Add water and ice - 1sec 
// #4 Start the machine - 1sec
// #5 Select Container - 2sec 
// #6 Select Toppings - 3sec 
// #7 Serve Ice Cream - 2sec

let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`Order Placed for a ${fruit_name} icecream!!`);
        call_production()
    }, 2000)
}

let production = () => {
    console.log("Order Received, Starting Production!!");
    setTimeout(() => {
        console.log("Fruits have been chopped!!");
    }, 2000)
}

order(stocks.fruits[2], production)