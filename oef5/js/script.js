let startUur = 12;
let startMinuten = 30;
let optelUur = 1;
let optelMinuten = 45;

startUur = startUur + optelUur;

if (startMinuten % 60 !=0) {
    startUur++;
    startMinuten = optelMinuten - startMinuten;
    console.log(`Het is nu ${startUur}:${startMinuten}`);
}
