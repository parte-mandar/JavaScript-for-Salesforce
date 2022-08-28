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

let placeOrder = () => {} // Customer places the order

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work())
                //console.log(`Order Placed for a ${fruit_name} icecream!!`);
                //call_production()
            }, time)
        }
        else{
            reject(console.log("The shop is closed"));
        }
    })
}

// order(stocks.fruits[2], production)
order(2000, () => {
    console.log(`Great choice, you've selected the ${stocks.fruits[3]} flavour!!`);
    console.log();
    console.log("Your icecream is being prepared");
})

.then(() => {
    return order(0000, () => {
        console.log("==> Starting Production!!");
    })
})

.then(() => {
    return order(2000, () => {
        console.log("==> Fruits are ready!!");
    })
})

.then(() => {
    return order(1000, () => {
        console.log(`==> Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}!!`);
    })
})

.then(() => {
    return order(1000, () => {
        console.log(`==> The magic has started!!`);
    })
})

.then(() => {
    return order(2000, () => {
        console.log(`==> Getting your ${stocks.holder[0]}!!`);
    })
})

.then(() => {
    return order(3000, () => {
        console.log(`==> Adding ${stocks.toppings[0]} toppings!!`);
    })
})

.then(() => {
    return order(2000, () => {
        console.log();
        console.log(`Enjoy!!`);
    })
})

.catch(() => {
    console.log("Customer Left!!");
})

.finally(() => {
    console.log("Day ended, shop is closed!!");
})