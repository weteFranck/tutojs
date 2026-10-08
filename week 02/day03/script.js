const firstName = document.getElementById('firstname');

const lastName = document.getElementById('lastname');

const email = document.getElementById('email');

const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', ()=> {

    const FirstNameValue = firstName.value;
    console.log("Le bouton a été cliqué !");        
});