//Luo tähän taulukko käyttäjiä varten.
let users = []
let submitButton = document.getElementById("submit_button")
let form = document.querySelector("form")
submitButton.addEventListener("click", submitUser)
/**
 * @param {Event} e 
 */
function submitUser(e){
    e.preventDefault(); //estetään sivun päivitys, kun nappia painetaan
    //Tee tähän koodi, joka tallettaa uuden käyttäjän tiedot oliona taulukkoon
    let formData = new FormData(form)
    let uname = formData.get("uname")
    let pw = formData.get("pw")
    let user = {
        username: uname,
        password: pw
    }
    users.push(user)
    //Tulostetaan aina lopuksi kaikki lisätyt käyttäjänimet
    printUsers();
}

function printUsers(){
    //Tulosta tähän kaikkien käyttäjien nimi taulukosta
    for (const user of users) {
        console.log(user.username)
    }
}