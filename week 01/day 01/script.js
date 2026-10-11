function estVerifier(a) {
    let a = prompt("entrez un nombre de votre choix");

    for (let i = 0; i > a; i++) {

        if (i != -a) {
            console.log("Ce nombre est un nombre positif");
        } else if (i %2 === 0) {
            console.log("Ce nombre est un nombre pair");
        } else if (i == -a) {
            console.log("ce nombre est un nombre  negatif");
        } else {
            console.log("c'est un nombre Nul");
        };
    };
};
b = estVerifier();
 console.log(b);