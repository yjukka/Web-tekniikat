 getAppliances();

//1 Tee map-funktiolla taulu, joka sisältää hinnat 60% alennuksella.
let prices = [200, 450, 234, 430, 670, 500, 150];
//2 Tee map-funktiolla toinen taulukko, jossa on jokaista 
//3 yli 200e hintaa kohden teksti "kallis" ja lopuissa teksti "halpa"
//4 Tee filter-funktiolla taulu, jossa on vain 300:aa halvemmat hinnat.

let alennus = prices.map(function(num){
    return num * 0.6
})
let kuvaus = prices.map(hinta => hinta>200 ? hinta + " kallis" : hinta + " halpa")
let kalliit = alennus.filter(num => num > 200)
let halvat = alennus.filter(num => num < 200)
let yli = alennus.filter(num => num > 300)
for (n of yli) {
    console.log(n)
}
for (n of halvat) {
    console.log(n)
}
for (n of kuvaus) {
    console.log(n)
}
//5 Suodata taulukosta vain ne nimet, joissa on kirjaimia 6 tai enemmän (length)
let names = ["John", "Lisa", "Marco", "Elizabeht", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];
let longName = names.filter( name => name.length >= 6)
console.log(longName)

function showAppliances(gadgets){
    //6 Funktion parametrina on taulukko, joka sisältää laitteiden nimiä
    //Tulosta nimistä lista tälle sivulle ul-luettelon sisään.
    let ul = document.querySelector("ul");

    for (gadget of gadgets) {
        let li = document.createElement("li")
        li.textContent = gadget
        ul.appendChild(li)
    }
}



function getAppliances(){
    fetch("https://random-data-api.com/api/v2/appliances?size=100")
        .then(resp => resp.json())
        .then(data => showAppliances(data.map(a => a.equipment)))
}


