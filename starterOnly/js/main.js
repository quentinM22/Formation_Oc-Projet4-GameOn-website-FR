console.log("Script Chargé ...");

/* Modal Close */
// récuperation De la class du bouton close
const close = document.querySelector(".close")
// récuperation de la class du container ou le modal ce situe 
const bground = document.querySelector(".bground")
// création de l'évènement pour changer le display: block en display:none
close.addEventListener("click", ()=>{
    bground.style.display = "none"
})



