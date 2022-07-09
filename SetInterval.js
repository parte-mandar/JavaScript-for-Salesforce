// setInterval() is same as setTimeout()
// Only difference is that setInterval runs continuously.
// In below case clock will run continuously every 1000ms
// It cannot stop unless we use clearInterval()

// ----------- Digital clock example using setInterval() -----------
let displayTime = () => {
    let date = new Date()
    let time = date.toLocaleTimeString();
    console.log("Time: ", time);
    setInterval(() => {
        console.clear(); // Clears the console screen
    }, 1000);
}

const clock = setInterval(displayTime, 1000)