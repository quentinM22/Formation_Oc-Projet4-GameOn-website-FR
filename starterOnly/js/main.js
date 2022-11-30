/* DOM Element - fermer Modal*/
const closebtn = document.querySelector(".close")
const bground = document.querySelector(".bground")
/* Event - fermer Modal*/
closebtn.addEventListener("click", () => {
    bground.style.display = "none"
    delMsgError()
})

/* Gestion Formulaire Inscription */
// Etape1 récuperation DOM
// 
// Elements Globale formulaire
const form = document.querySelector("form").tagName
const checkContainer = document.querySelector(".check-container")
const cuContainer = document.querySelector(".CU-container")
const btnSubmit = document.querySelector(".btn-submit")
// Elements donnees formulaire 
const frist = document.querySelector("#frist")
const last = document.querySelector("#last")
const email = document.querySelector("#email")
const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")
const citys = document.querySelector('#location6');
const CU = document.querySelector('#checkbox1');
const radioCheck = document.querySelector('input[name = "location"]:checked');
// 
//Etape2 Traitement données
// 
// Firstname / lastname fonction
// 
function validFirstName() {
    if (!first.value) {
        getError(first, "Veuillez renseigner un Prénom valide.")
        // console.log("Veuillez renseigner un Prénom valide.");
    } else if (first.value.length < 2) {
        getError(first, "Le champs doit comporter minimum 2 caractères.")
    } else {
        return true
    }
}
function validlastName() {
    if (!last.value) {
        getError(last, "Veuillez renseigner un Nom valide.")
        // console.log("Veuillez renseigner un Prénom valide.");
    } else if (last.value.length < 2) {
        getError(last, "Le champs doit comporter minimum 2 caractères.")
    } else {
        return true
    }
}
// 
// Email fonction
// 
function validEmail() {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email.value) {
        getError(email, "Veuillez renseigner un Email valide.")
    } else if (!email.value.match(regex)) {
        getError(email, "Format Email invalide (ex: test@test.com)")
    } else {
        return true
    }
}
// 
// BirthDate fonction
// 
function validBirthdate() {
    if (!birthdate.value) {
        getError(birthdate, "Veuillez entrer votre date de naissance.");
        return false;
    } else {
        return true;
    }
}
// 
// CU fonction
// 
function validationCu() {
    if (!CU.checked) {
        getErrorCheckboxCU("Veuillez cocher la case \"conditions d'utilisation\".");
    } else {
        return true
    }
}
// 
// quantité fonction
// 
function validationQuantity() {
    if (!quantity.value) {
        getError(quantity, "Veuillez renseigner a combien de tournois avez-vous déjà participé.")
        return false
    } else {
        return true
    }
}
// 
// localisation fonction
// 
function validLocation() {
    if (radioCheck != null) {
        //   setValidCheckbox(citys);
        return true;
    } else {
        getErrorCheckbox("Veuillez renseigner une localisation.");
        return false;
    }
}
//   
// Etape3 Gestion Erreur
// 
function getError(input, message) {
    const createErrorMsg = document.createElement('p')

    createErrorMsg.className = "error-message"
    createErrorMsg.textContent = message
    input.after(createErrorMsg)
}
function getErrorCheckbox(message) {
    const createErrorMsg = document.createElement('p')

    createErrorMsg.className = "error-message"
    createErrorMsg.textContent = message
    checkContainer.after(createErrorMsg)
}
function getErrorCheckboxCU(message) {
    const createErrorMsg = document.createElement('p')

    createErrorMsg.className = "error-message"
    createErrorMsg.textContent = message
    cuContainer.after(createErrorMsg)
}
// Suppression message-erreur

function delMsgError() {
    const errorMsg = document.querySelectorAll('.error-message')
    for (let i = 0; i < errorMsg.length; i++) {
        errorMsg[i].remove()
    }
}

// 
// Etape5 Validation Formulaire
// 
function validate() {
    

    validFirstName()
    validlastName()
    validEmail()
    validBirthdate()
    validationQuantity()
    validationCu()
    validLocation()
}
