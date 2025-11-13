let cijfer = 3;

switch (cijfer) {
    case 0:
    case 1:
    case 2:
        console.log(`Zeer slecht`);
        break;
    case 3:
    case 4:
        console.log(`Onvoldoende`);
        break;
    case 5:
    case 6:
        console.log(`Voldoende`);
        break;
    case 7:
    case 8:
        console.log(`Goed`);
        break;
    case 9:
    case 10:
        console.log(`Uitstekend`);
        break;
    default:
        console.log(`Cijfer verkeerd ingegeven.`);
}