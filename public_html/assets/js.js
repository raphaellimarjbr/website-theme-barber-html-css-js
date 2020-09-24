/* EFFECT SCROLL MENU */

window.onscroll = function()
{
    let top = window.pageYOffset;
    let menu = document.getElementById("header");

    if(top > 150){
        menu.style.position = "fixed";
        menu.style.top = 0;
        menu.style.zIndex = 2;
    }else{
        menu.style.position = "relative";
        menu.style.top = 5;
    }
}

/* TEXT SUMARY ABOUT */

var text = document.querySelectorAll("p")[1].innerText;
var textModify = document.querySelectorAll("p")[1];

var number = 500;

if(text.length > number){
    var decreaseText = text.substr(0, number);
    console.log(decreaseText);
    textModify.innerHTML = decreaseText+"...";
}

var button = document.querySelectorAll("button")[0];

button.addEventListener("click", function(){
    if(text.length >= number){
        console.log(text);
        textModify.innerHTML = text;
    }
});