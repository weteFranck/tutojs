function estVerifier(a) {

    if (a != -0) {
        console.log("Ce nombre est un nombre positif");
    } else if (a % 2 === 0) {
        console.log("Ce nombre est un nombre pair");
    } else if (a === -0) {
        console.log("ce nombre est un nombre  negatif");
    } else {
        console.log("c'est un nombre Nul");
    };

};
b = estVerifier();
console.log(b);