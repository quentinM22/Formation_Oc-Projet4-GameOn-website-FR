/* DOM Element - fermer Modal*/
const closebtn = document.querySelector(".close")
const bground = document.querySelector(".bground")
const modalBody = document.querySelector('.modal-body')
/* Event - fermer Modal*/
closebtn.addEventListener("click", () => {
    bground.style.display = "none"    
})


/* Gestion Formulaire Inscription */
// Variobles
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// 
// Etape1 récuperation DOM
// 
// Elements Globale formulaire
const form = document.querySelector("form")
const btnSubmit = document.querySelector(".btn-submit")
// Elements donnees formulaire 
const first = document.querySelector("#first")
const last = document.querySelector("#last")
const email = document.querySelector("#email")
const birthdate = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")
const citys = document.querySelector('#location6');
const CU = document.querySelector('#checkbox1');
// 
// Etape2 Traitement données
// 
// Firstname / lastname fonction
// 
function checkFirstName() {
    if (!first.value || !first.value.match(regexName)) {
        getError(first, "Veuillez renseigner un Prénom valide.")
    } else if (first.value.length < 2){
        getError(first, "Veuillez entrer au minimum 2 caractères.")
    } else {
        getValid(first)
        return true
    }
}
function checkLastName() {
    if (!last.value || !last.value.match(regexName)) {
        getError(last, "Veuillez renseigner un Nom valide.")
    }else if (last.value.length < 2){
        getError(last, "Veuillez entrer au minimum 2 caractères.")
    } else {
        getValid(last)
        return true
    }
}
// 
// Email fonction
// 
function checkEmail() { 
    if (!email.value || !email.value.trim().match(regexMail)) {
        getError(email,`Veuillez renseigner un Email valide (ex: test@test.fr)`)
    } else {
        getValid(email)
        return true
    }
}
// 
// BirthDate fonction
// 
document.addEventListener('DOMContentLoaded', maxBirthdate);
function maxBirthdate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() +1;
    let year = date.getUTCFullYear();
    //condition day 1 à 9 => 01 à 09
    if (day < 10) {
      day = '0' + day;
    } 
    //condition month 1 à 9 => 01 à 09
    if (month < 10) {
      month = '0' + month;
    }
    maxDate = year + "-" + month + "-" + day;
    birthdate.setAttribute('max', maxDate);
  }
function checkBirthdate() {
    if (!birthdate.value) {
        getError(birthdate, "Veuillez entrer votre date de naissance.");
        return false;
    } else {
        getValid(birthdate)
        return true;
    }
}
// 
// CU fonction
// 
function checkCu() {
    if (!CU.checked) {
        getErrorCheckboxCU(CU,"Veuillez cocher la case \"conditions d'utilisation\".");
    } else {
        getValidCheck(CU)
        return true
    }
}
// 
// quantité fonction
// 
function checkQuantity() {
    if (!quantity.value ) {
        getError(quantity, "Veuillez renseigner a combien de tournois avez-vous déjà participé.")
        return false
    }else {
        getValid(quantity)
        return true
    }
}
// 
// localisation fonction
// 
function checkLocation() {
    const radioCheck = document.querySelector("input[name='location']:checked");
    if (radioCheck != null) {
        getValidCheck(citys)
        return true;
    } else {
        getErrorCheckbox(citys, "Veuillez renseigner une localisation.");
        return false;
    }
}
//   
// Etape3 Gestion Erreur Formulaire
// 
function getError(input, message) {
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    const inputStyle = formData.querySelector('input')
    
    span.innerText = message
    span.className = 'msg error-message'
    inputStyle.className = "text-control input-error"
}
function getErrorCheckbox(input, message) {
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')

    span.innerText = message
    span.className = 'msg error-message'
}
function getErrorCheckboxCU(input,message) {
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    const checkBoxStyle = formData.querySelector(".checkbox-icon")

    span.innerText = message
    span.className = 'msg error-message'
    checkBoxStyle.className = 'checkbox-icon input-error'
}
// 
// Etape4 Gestion Validation Formulaire
// 
function getValid(input){
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    const inputStyle = formData.querySelector('input')
    inputStyle.className = "text-control input-valid"
    span.innerText = ' '
    
}
function getValidCheck(input){
    const formData = input.parentElement;
    const span = formData.querySelector('.msg')
    span.innerText = ' '
    const inputStyle = formData.querySelector('.checkbox-icon')
    inputStyle.classList.remove('input-error')
}
function screenValidation(){

    const msgValid = document.querySelector('.message-valid')
    modalBody.remove(form)
    msgValid.innerHTML = `
    <p>Merci
    <br>
    Pour L'inscription</p>
    <input class="btn-submit" type="button" class="button" value="Retour" onclick="refresh()" />
    <br>
    ` 
 
}
// 
// Etape5 Validation Formulaire
//
function forAllFieldsCheck() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthdate()
    checkQuantity()
    checkLocation()
    checkCu()
}
function validate() {
    if (checkFirstName() == true 
    && checkLastName() == true 
    && checkEmail() == true 
    && checkBirthdate() == true 
    && checkQuantity() == true 
    && checkLocation() == true 
    && checkCu() == true) {
        return true
    }
    return false
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate() == true) {
        screenValidation()
        closebtn.addEventListener("click", () => {
            refresh()    
        })
    } else{
        forAllFieldsCheck();
    }  
  }) 
  
  function refresh(){
    window.location.reload()
  }