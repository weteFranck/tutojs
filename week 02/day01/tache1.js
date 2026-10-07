// calcul a proximatif de l'age d'un utilisateur

// 1. Récupération des informations
const nom = prompt("Entrez votre nom :");
const prenom = prompt("Entrez votre prénom :");
const anneeNaissance = parseInt(prompt("Entrez votre année de naissance :"));

// 2. Obtention de l'année actuelle
const anneeActuelle = new Date().getFullYear();
const ageApprox = anneeActuelle - anneeNaissance;

// 4. Affichage
console.log('Nom complet est :' + ' ' + prenom + ' ' + nom);
console.log('Âge approximatif est de :' +' ' + ageApprox + ' '+ 'ans');



// convertisseur température Celsius/Fahrenheit.
function temperature() {
    
    let temp = prompt('entrer votre temperature en celsuis : ');
        
        let f = temp * 1.8 + 32;

        alert('la temperature de celsuis a fahrenheit est :' + f);
         
        let c = (f - 32) / 1.8;

        alert ('votre temperature de fahrenheit a celsuis  :' + c);
            
}
// temperature()       



// // const monPrenom = 'franck';

// // console.log (typeof eleve);

// let result = Num %2 === 0 ? "est paire" : "est inpaire";

// console.log (result);

// // if (Num %2 ===0) {
// //     result = "est paire";

// //     } else {
// //     result = "est inpaire";
// // }
// // console.log (result);

// // const (Num %2) if {
// //     result = "est paire";
// // } else {
// //     result = "est inpaire";
// // }
// // console.log (result);