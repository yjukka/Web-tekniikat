let btn = document.createElement("button")
btn.innerText = "Change color!"
document.body.appendChild(btn)

function onClicked(){
    document.body.style.backgroundColor = "grey"
}
function hovered(){
    btn.innerText = "Muuta väriä!"
}
function hoverOff(){
    btn.innerText = "Change color!"
}
function increaseWidth(){
    let buttonStyle = document.querySelector("button")
    style = window.getComputedStyle(buttonStyle, null).getPropertyValue('width')
    currentSize = parseFloat(style)
    buttonStyle.style.width = (currentSize + 50) + "px"

}
let haku = document.getElementById("search")
haku.addEventListener("input", searching)
let listItems = document.querySelectorAll("li")
function searching(){  
    let keyWord = haku.value
    for (const list of listItems) {
        if (list.textContent.includes(keyWord)){
            list.style.display = "list-item"
        }
        else{
            list.style.display = "none"
        }
    }
    
    
}
btn.addEventListener("mouseover", hovered)
btn.addEventListener("click", onClicked)
btn.addEventListener("mouseout", hoverOff)
btn.addEventListener("click", increaseWidth)