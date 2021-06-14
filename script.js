const age = 24;
if (age >= 18 && age <= 25) {
    console.log("Je mag naar binnen en krijgt 50% korting!");
} else if (age < 18) {
    console.log("Je bent helaas te jong. Blijf buiten s.v.p.");
} else if (age > 25) {
    console.log("Je mag naar binnen!");
}
const name = "Sarah";
if (name == "Bram" || name == "Sarah") {
    console.log("Je hebt recht op een gratis biertje!");
} else {
    console.log("Je heet helaas geen Sarah of Bram.");
}

const totalAmount = 51;
if (totalAmount <= 25) {
    console.log("Geef meer geld uit om iets extra's te krijgen");
}
else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie nachos");
}
else if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Je krijgt een gratis portie (vega)bitterballen!");
}
else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne");
}