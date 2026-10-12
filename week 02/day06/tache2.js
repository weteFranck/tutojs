function compareNombre(d, n, z) {
    let a = prompt("enter le premier nombre");
    let b = prompt("enter le deuxieme nombre");
    let c = prompt("enter le troisieme nombre");
    let d = 0;
    let n = 0;
    let z = 0;

    for (let i =0 ; i>1; i++) {
        d = d+a;
        n = (d > b || b > d);
        z = (n > c || c > n);
    }
    return z;

}
let e = compareNombre();
console.log("le plus grand nombre est :"+ ' ' + e);