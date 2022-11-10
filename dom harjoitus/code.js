//basic tehtävät
let basicOne = document.querySelector("#content")
let basicTwo =  document.querySelector(".basic")
let basicThree = document.querySelector("li")
let basicFour = document.querySelector("ul>:last-child")
console.log(basicOne.tagName)
console.log(basicTwo.tagName)
console.log(basicThree.textContent)
console.log(basicFour.textContent)




// collections harjoitus

//tehtävä 1
let collOne = document.querySelectorAll("body *")
for(elem of collOne){
    console.log(elem.nodeName);
}

//tehtävä 2
let collThree = document.querySelectorAll("article p")
for(elem of collThree){
    console.log(elem.textContent)
}


//tehtävä 3
let listItems = document.querySelectorAll("ul>li")
let john = "John Doe"
for (li of listItems) {
    li.textContent = john
}


//tehtävä 4

let content = document.querySelectorAll("#content *")
for(elem of content){
    if(elem.textContent.length > 10){
        console.log(elem.nodeName);
    }
}
