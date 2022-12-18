//Jukka Ylipahkala

//haetaan html form
let userForm = document.querySelector("form")
//katsoo radiobuttonin valuen
let importantCheck = document.getElementById("importantButton")
//tänne menee kaikki muistiinpanot ja nimet
let userNotes = []
let iNotes = document.getElementById("importantNotes")
let nNotes = document.getElementById("addNotes")
document.getElementById("submitButton").addEventListener("click", sendData)
let today = new Date()
/**
 * @param {Event} e 
 */
function sendData(e){
    e.preventDefault()
    //tehdään formdata muuttuja
    let formData = new FormData(userForm)
    //tehdään muuttujat joilla otetaan mitä käyttäjä syöttää
    let uname = formData.get("nameInput")
    let unote = formData.get("noteInput")
    //olio jossa on käyttäjän tiedot
    let userNote = {
        userName: uname,
        userNote: unote
    }
    //laitetaan kaikki tiedot yhteen olioon
    userNotes.push(userNote)
    showNotes()
}


function showNotes(){       
    // tekee html elementit joihin teksti tulee
        let nameHeader = document.createElement("h3")
        let notePara = document.createElement("p")
        nameHeader.innerText += today.getDate()+'.'+(today.getMonth()+1)+"."+today.getFullYear()
        nameHeader.innerText += " (" + userNotes.slice(-1)[0].userName + ") "
        notePara.innerText = userNotes.slice(-1)[0].userNote
        //jos "tärkeä" nappi on valittu niin lisätään punainen reunus
        if (importantCheck.checked){
        iNotes.classList.remove("hide")
        iNotes.classList.add("importantNotes")
        iNotes.prepend(notePara)
        iNotes.prepend(nameHeader)
        }
        //lisää normaalin muistiinpanon
        else {
        nNotes.classList.remove("hide")
        nNotes.classList.add("addNotes")
        document.getElementById("addNotes").prepend(notePara)
        document.getElementById("addNotes").prepend(nameHeader)
        }
}

