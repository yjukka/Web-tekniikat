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
let btn = document.querySelector("button")
btn.setAttribute("type", "button")
btn.onclick = calculate;
