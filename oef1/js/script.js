let voornaam = "Dimitrije";
let achternaam = "Ivanovic";
let leeftijd = 21;

if (voornaam == null || achternaam == null) {
    console.log(`Vul zowel voornaam als achternaam in!`);
}
else {
    console.log(`Goedgekeurd`);
}

if (leeftijd < 12 || leeftijd > 60) {
    console.log(`U behoort niet tot de gezochte leeftijdsklasse!`);
}
else {
    console.log(`Goedgekeurd`);
}

