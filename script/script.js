function valider_mail(champ_mail){
    let errormail=document.querySelector(".trois")
    let style=document.getElementById("email")
    let emailRegex= new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegex.test(champ_mail.value)){
        errormail.classList.add("active")
        style.classList.add("contour")
    }
}
function valider_nom(champ_nom){
    let errornom=document.querySelector(".deux")
    let style=document.getElementById("nom")
    if (champ_nom.value===""){
        errornom.classList.add("active")
        style.classList.add("contour")
    }
}
function valider_prenom(champ_prenom){
    let errorprenom=document.querySelector(".un")
    let style=document.getElementById("prenom")
    if (champ_prenom.value===""){
        errorprenom.classList.add("active")
        style.classList.add("contour")
    }
}
function valider_choix(champ_radio){
    let errorradio=document.querySelector(".quatre")
    if (champ_radio!=="checked"){
        errorradio.classList.add("active")
    }
}
function valider_mess(champ_mess){
    let errormess=document.querySelector(".cinq")
    let style=document.getElementById("message")
    if (champ_mess.value===""){
        errormess.classList.add("active")
        style.classList.add("testy")
        // style.style= "border: 1px solid red;";
        console.log(style)
    }
}
function valider_consent(champ_select){
    let errorconsent=document.querySelector(".six")
    if (champ_select!=="checked"){
        errorconsent.classList.add("active")
    }
}

function afficherPopup(){
    let popup=document.querySelector(".popup_confirmation")
    popup.classList("active")
}

function click_btn(){
    let bouton=document.querySelector(".bouton button")
    bouton.addEventListener("submit", (event)=>{
      event.preventDefault()  
      afficherPopup()
    })
}
function validation(){
    valider_nom(champ_nom)
    valider_prenom(champ_prénom)
    valider_mail(champ_mail)
    valider_mess(champ_mess)
    valider_consent(champ_select)
    valider_choix(champ_radio)
}