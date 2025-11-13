let number1 = 2;
let number2 = 2;
let operator = `/`;
let result;

switch (operator) {
    case `/`:
        if(number2 == 0) {
            console.log(`Not divideable by 0`);
        }
        else {
            result = number1 / number2;
            console.log(result);
        }
        break;
    case `*`:
        result = number1 * number2;
        console.log(result);
        break;
    case `+`:
        result = number1 + number2;
        console.log(result);
        break;
    case `-`:
        result = number1 - number2;
        console.log(result);
        break;
    default:
        console.log(`Ongeldige operator`);
}