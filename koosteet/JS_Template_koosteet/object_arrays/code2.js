//Tiedostoa voi ajaa suorana node-komennolla. Ei ole kytketty mihinkään html-sivuun.

let players = [
    {pname: "Repe", points: 400},
    {pname: "Liisa", points: 890},
    {pname: "Tiina", points: 342},
    {pname: "Simo", points: 232},
];

//Luo map-funktiolla pelaajista taulukko, jossa on vain pelaajien nimet ja tulosta nimet.

//Luo filter-funktiolla taulukko, jossa on vain ne pelaajat, joiden pistemäärä on yli 300.

//Luo map-funktiolla taulukko, joka sisältää vain niiden pelaajien nimet, joiden pistemäärä on alle 500.

let cars = [
    {plateNumber: "ASD-002", carspeed: 130},
    {plateNumber: "OOP-001", carspeed: 120}]
    console.log(cars)
    cars[0].carspeed = 0
let highPoints = players.filter(num => num.points > 300)
console.log(highPoints)
let highPointsMap = players.map(pojot => pojot.points < 500)
for (p of highPoints) {
    console.log(highPointsMap)
}