let number = Math.floor(Math.random() * 10) + 1;
let guess = 6;

if (guess == number) {
    console.log(`Correct!`)
}
else {
    console.log(`Wrong... the correct number was ${number}`);
}