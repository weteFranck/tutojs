const users = [
  { name: "John Doe", email: "john@gmail.com", age: 25 },
  { name: "Alice", email: "alice@gmail.com", age: 17 },
  { name: "", email: "invalid-email", age: 30 },
  { name: "Paul Martin", email: "paul@gmail.com", age: 22 },
  { name: "Sarah", email: "", age: 15 },
];

//fonction qui recuper les utilisateurs valides et decompte les utilisateurs invalides
function valideUsers(users) {
    let c=0;
    let user;
    console.log('la liste des t\'ulisateurs valide est :');
    for (let i = 0; i < users.length; i++){
        user = users[i];
        if (user.name !== "" && user.email.includes('@') && user.age >=18) {
           console.log(user);
            
        }else {
              c=c+1;
        }
    }
    console.log('nombre d\'utilisateurs invalides est : ' + c);
    
}
valideUsers(users);


//fonction qui recuper les utilisateurs invalides
function usersInvalide(users) {
    let user;
    let useri=[];
    let userv=[];
    let v=0;
    let t=0;
   
    for (let i = 0; i < users.length; i++){
        user = users[i];
        if (user.name !== "" && user.email.includes('@') && user.age >=18) {
           userv[v] = user
           v=v+1;
            
        }else {
            useri[t] = user;
            t=t+1;
        }
    }
    return useri;
    
}


// fonction qui affiche le motiffe d'invaliditer du'un utilisateur.
function usersDefaul (pour) {
    let p = usersInvalide (pour);
    for (let i = 0; i < p.length; i++) {
        if (p[i].name === "") {
            console.log('le nom est le pb');
        } else if (!p[i].email.includes('@')) {
            console.log('l\'email est le pb');
        
        } else if (p[i].age <18) {
            console.log('l\'age est le pb');
        }
    }
}
usersDefaul (Users);