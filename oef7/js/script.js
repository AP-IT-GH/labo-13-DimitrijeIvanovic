let temp;
let unit;

function change(temp, unit) {

    if(unit === "F") {
        temp = (temp -32) * 5 / 9;
        console.log(`In Celsius: ${temp}`);
    }
    else if (unit === "C") {
        temp = (temp * 9/5) + 32;
        console.log(`In Fahrenheit: ${temp}`);
    }
    else {
        console.log(`Unit not correct.`);
    }
}

change(40, "C");