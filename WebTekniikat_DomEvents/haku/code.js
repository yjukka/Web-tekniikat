let btn = document.createElement("button")
btn.innerText = "Change color!"
document.body.appendChild(btn)
let haku = document.querySelector("#search")
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
function searching(){  
    
    
}
btn.addEventListener("mouseover", hovered)
btn.addEventListener("click", onClicked)
btn.addEventListener("mouseout", hoverOff)
btn.addEventListener("click", increaseWidth)
haku.addEventListener("search", searching)