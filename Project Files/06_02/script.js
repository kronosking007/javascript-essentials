const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Get the current set date  and time using Date object
var date = new Date();
console.log(date);

// getting property functions from Date object and storing in each individual values
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("hr = "+ hr);
console.log("min = "+ min);
console.log("sec = "+ sec);



// convert the individual values to degrees
let hrPosition = (hr * 360/12)+(min * (360/60)/12);
let minPosition = (min * 360/60)+(sec * (360/60)/60);
let secPosition = sec * 360/60;

// We need to run the clock every second so we will call the function every second
// This can be done using setInterval property

function runClock(){

    hrPosition = hrPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;


    HOURHAND.style.transform = "rotate("+hrPosition+ "deg)" ;
    MINUTEHAND.style.transform = "rotate("+minPosition+ "deg)" ;
    SECONDHAND.style.transform = "rotate("+secPosition+ "deg)" ;
}


// execute the runClock function with the sepcified interval time
var interval = setInterval(runClock, 1000);