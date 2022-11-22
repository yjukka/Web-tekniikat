/*Tehtävä 2
let results = document.querySelector("#result")
function calculate(){
    let radioValueOne = document.querySelector("#sum")
    let radioValueTwo = document.querySelector("#sub")
    let valueOne = Number(document.querySelector("#num1").value)
    let valueTwo = Number(document.querySelector("#num2").value)
    if (radioValueOne.checked){
    let total = valueOne + valueTwo
    document.querySelector("#result").innerHTML = total
    if (total < 50){
        results.style.color = "red"    
    }
    else if (total > 50){
        results.style.color = "green"
    }
    }
    else if (radioValueTwo.checked){ 
        let subTotal = valueOne - valueTwo
        document.querySelector("#result").innerHTML = subTotal
        if (subTotal < 50){
            results.style.color = "red"
        }
        else if (subTotal > 50){
            results.style.color = "green"
        }
    }
}
btn.onclick = calculate;

let btn = document.querySelector("button")
btn.setAttribute("type", "button")
*/
//tehtävä 4
let form = document.querySelector("form")
let result = document.getElementById("result")
form.addEventListener("submit", calculate)
    function calculate(e){
    e.preventDefault()
    let fData = new FormData(form)
    let num1 = Number(fData.get("num1"))
    let num2 = Number(fData.get("num2"))
    
    let arit = fData.get("arit")
    let res;
        if (arit == "sum"){
            res = num1 + num2
        }
        else{
            res = num1 - num2
        }
        result.textContent = "Tulos on " + res
}