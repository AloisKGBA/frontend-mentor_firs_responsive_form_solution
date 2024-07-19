function valider_mail(champ_mail){
    let errormail=document.querySelector(".trois")
    let style=document.getElementById("email")
    let emailRegex= new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegex.test(champ_mail.value)){
        errormail.classList.add("active")
        style.classList.add("contour")
        return false
    }else{
        errormail.classList.remove("active")
        style.classList.remove("contour")
        return true}
}
function valider_nom(champ_nom){
    let errornom=document.querySelector(".deux")
    let style=document.getElementById("nom")
    if (champ_nom.value===""){
        errornom.classList.add("active")
        style.classList.add("contour")
        return false
    }else{
        errornom.classList.remove("active")
        style.classList.remove("contour")
        return true}
}
function valider_prenom(champ_prenom){
    let errorprenom=document.querySelector(".un")
    let style=document.getElementById("prenom")
    if (champ_prenom.value===""){
        errorprenom.classList.add("active")
        style.classList.add("contour")
        return false
    }else {
        errorprenom.classList.remove("active")
        style.classList.remove("contour")
        return true}
}
function valider_choix(champ_radio_un,champ_radio_deux){
    let errorradio=document.querySelector(".quatre")
    if (!champ_radio_un.checked && !champ_radio_deux.checked){
        errorradio.classList.add("active")
        return false
        }else{
            errorradio.classList.remove("active")
            return true}
    }

function valider_mess(champ_mess){
    let errormess=document.querySelector(".cinq")
    let style=document.getElementById("message")
    if (champ_mess.value===""){
        errormess.classList.add("active")
        style.style= "border: 1px solid red;";
        return false
    }else {
        errormess.classList.remove("active")
        style.style="border: 1px solid black"
        return true}
}
function valider_consent(champ_select){
    let errorconsent=document.querySelector(".six")
    if (!champ_select.checked){
        errorconsent.classList.add("active")
        return false
    }else{
        errorconsent.classList.remove("active")
        return true}
}

function validation(){
    let indice=0
    indice = ( valider_nom(champ_nom)) ? indice + 1 : indice
    console.log(indice)
    indice=( valider_prenom(champ_prénom) ) ? indice+1 : indice
    console.log(indice)
    indice=( valider_mail(champ_mail) ) ? indice+1 : indice
    console.log(indice)
    indice=( valider_mess(champ_mess) ) ? indice+1 : indice
    console.log(indice)
    indice=( valider_consent(champ_select) ) ? indice+1 : indice
    console.log(indice)
    indice=( valider_choix(champ_radio_un,champ_radio_deux) ) ? indice+1 : indice
    console.log(indice)
    if (indice===6){
        afficherPopup()
    }
}

function afficherPopup(){
    let popup=document.querySelector(".popup_confirmation")
    popup.classList.add("active")
}

function click_btn(){
    let bouton=document.querySelector(".bouton button")
    bouton.addEventListener("submit", (event)=>{
      event.preventDefault()  
      afficherPopup()
    })
}
function mafonction(){
    let select=document.getElementById("general_enquiry")
    let image_1=document.getElementById("image_1")
    let image_2=document.getElementById("image_2")
    let select2=document.getElementById("support_request")
    select.style="display:none;"
    image_1.style="display: flex;"
}