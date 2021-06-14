const age = 24;
if (age >= 18 && age <= 25) {
    console.log("Je mag naar binnen en krijgt 50% korting!");
} else if (age < 18) {
    console.log("Je bent helaas te jong. Blijf buiten s.v.p.");
} else if (age > 25) {
    console.log("Je mag naar binnen!");
}
const driverStatus = "bob";
if (driverStatus === "bob") {
    console.log("Je bent de bob, je mag autorijden");
} else {
    console.log("Je bent geen bob, hier met die autosleutels");
}

const name = "Sarah";
if (name == "Bram" || name == "Sarah") {
    console.log("Je hebt recht op een gratis biertje!");
} else {
    console.log("Je heet helaas geen Sarah of Bram.");
}

const totalAmount = 23;
if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne.");
} else if (totalAmount > 50) {
    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount > 25) {
    console.log("Je krijgt gratis (vega)bitterballen");
} else {
    console.log("Helaas niks extra's, maar leuk dat je er bent. Geef meer geld uit.");
}