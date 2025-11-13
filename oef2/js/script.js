let jaar = 2025;

if (jaar % 4 !=0) {
    console.log(`Geen schrikkeljaar`);
}
else if (jaar % 100 !=0) {
    console.log(`schrikkeljaar`);
}
else if (jaar % 400 !=0) {
    console.log(`geen schrikkeljaar`);
}
else {
    console.log(`schrikkeljaar`);
}

