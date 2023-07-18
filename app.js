let inputAdd=document.getElementById("inputAdd");
let toDoContainer=document.getElementById("toDoContainer");
let inputText=document.getElementById("inputText");
let inputClear=document.getElementById("inputClear");

inputAdd.addEventListener("click",function(){
    let paragraph= document.createElement("p");
    paragraph.classList.add("paragraph-style");
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value="";
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })
    inputClear.addEventListener("click",function(){
        paragraph.remove();
    })
})



