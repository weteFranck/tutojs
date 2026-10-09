// declaration des variable
const form = document.getElementById('create-task-form');
const createTaskBtn = document.getElementById('create-task');
const saveTaskBtn = document.getElementById('save-task');
const resetTaskBtn = document.getElementById('reset-task');

const taskTitle = document.getElementById('task-title');
const taskPriority = document.getElementById('task-priority');
const taskDescription = document.getElementById('task-description');
const taskDate = document.getElementById('task-date');
const taskHour = document.getElementById('task-hour')


const contenue = document.getElementById('contenue');

//ecoute de l'evenement du click sur creete-task
createTaskBtn.addEventListener('click', () =>{
    form.style.display = "block";
});

// ecouter de l'evenement du click sur resert-task
resetTaskBtn.addEventListener('click', () =>{
    form.style.display = "hidden";
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitBtn()

})

// ecouter de l'evenement du click sur save-task
// saveTaskBtn.addEventListener('click', () =>{
//     form.
// });
function submitBtn(){
    if (taskTitle.value === "" || taskPriority.value === "" || taskDescription.value === "" || taskDate.value === "" || taskHour.value === "" ) {
        alert("Remplicer tout les champs s'il vous plait");
    } else {

        // pour la colone titre
        let tdtitre = document.createElement("td");
        tdtitre.innerHTML = taskTitle.value;
        contenue.append(tdtitre);
        
        // pour la colone priority 
        let tdpriority = document.createElement("td");
        tdpriority.innerHTML = taskPriority.value;
        contenue.append(tdpriority);

        //pour la colone description
        let tddescription = document.createElement("td");
        tddescription.innerHTML = taskDescription.value;
        contenue.append(tddescription);

        //pour la colone de date
        let tddate = document.createElement('td');
        tddate.innerHTML = taskDate.value;
        contenue.append(tddate);

        //por la colone d'heure
        let tdheure = document.createElement('td');
        tdheure.innerHTML = taskHour.value;
        contenue.append(tdheure);

    };
     console.log(tdtitre, tdpriority, tddescription, tddate, tdheure);
};
// recuperation des valeurs du formulaire






























// document.addEventListener('DOMContentLoaded', () => {
//     // Sélection des éléments HTML
//     const createBtn = document.getElementById('create-task');
//     const taskForm = document.querySelector('form');

//     // Événement pour afficher/masquer le formulaire
//     createBtn.addEventListener('click', () => {
//         taskForm.classList.toggle('hidden');
//     });

//     // Événement lors de la soumission du formulaire
//     taskForm.addEventListener('submit', (e) => {
//         e.preventDefault(); // Empêche le rechargement de la page

//         // Récupération des valeurs des champs
//         const title = document.getElementById('task-title').value;
//         const priority = document.getElementById('task-priority').value;
//         const date = document.getElementById('task-date').value;

//         // Validation simple
//         if (!title || !date) {
//             alert('Veuillez remplir tous les champs !');
//             return;
//         }

//         // Exemple d'action avec les données (vous pourrez l'adapter pour ajouter un élément à une liste)
//         console.log('Nouvelle tâche créée :', { title, priority, date });

//         // Réinitialisation et masquage du formulaire après soumission
//         taskForm.reset();
//         taskForm.classList.add('hidden');
//     });
// });
