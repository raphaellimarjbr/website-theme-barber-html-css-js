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