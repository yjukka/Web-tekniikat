getAppliances();

//1 Tee map-funktiolla taulu, joka sisältää hinnat 60% alennuksella.
let prices = [200, 450, 234, 430, 670, 500, 150];
//2 Tee map-funktiolla toinen taulukko, jossa on jokaista 
//3 yli 200e hintaa kohden teksti "kallis" ja lopuissa teksti "halpa"
//4 Tee filter-funktiolla taulu, jossa on vain 300:aa halvemmat hinnat.

//5 Suodata taulukosta vain ne nimet, joissa on kirjaimia 6 tai enemmän (length)
let names = ["John", "Lisa", "Marco", "Elizabeht", "Gunther", "Eveliina", "Risto-Matti", "Marko", "Eijastiina"];


function showAppliances(gadgets){
    //6 Funktion parametrina on taulukko, joka sisältää laitteiden nimiä
    //Tulosta nimistä lista tälle sivulle ul-luettelon sisään.
}


function getAppliances(){
    fetch("https://random-data-api.com/api/v2/appliances?size=100")
        .then(resp => resp.json())
        .then(data => showAppliances(data.map(a => a.equipment)))
}


