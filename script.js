var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var btn=document.getElementById("add-popup-button")
btn.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var btn1=document.getElementById("two")
btn1.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var book=document.getElementById("one")
var booktitle=document.getElementById("book-title-input")
var author=document.getElementById("book-author-input")
var describe=document.getElementById("book-des-input")
book.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${author.value}</h5>
    <p>${describe.value}</p>
    <button onclick="delete1(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none "
    popupbox.style.display="none"
})
function delete1(event){
    event.target.parentElement.remove()
}