let number1 = 2;
let number2 = 2;
let operator = `/`;
let result;

if(operator == `+`) {
    result = number1 + number2;
    console.log(result);
}
else if (operator == `-`) {
    result = number1 - number2;
    console.log(result);
}
else if (operator == `*`) {
    result = number1 * number2;
    console.log(result);
}
else if (operator == `/`) {
    if (number2 == 0) {
        console.log(`Number not dividable by 0`)
    }
    else {
        result = number1 / number2;
        console.log(result);
    }
}
