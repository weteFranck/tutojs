const firstName = document.getElementById('firstname');

const lastName = document.getElementById('lastname');

const email = document.getElementById('email');

const Button = document.getElementById('saveButton');

Button.addEventListener('click', ()=> {

    const FirstNameValue = firstName.value;
    console.log("Le bouton a été cliqué !");        
});