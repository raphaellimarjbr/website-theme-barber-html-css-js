// EFFECT SCROLL MENU

window.onscroll = function()
{
    let top = window.pageYOffset;
    let menu = document.getElementById("header");

    function Menu(){
        if(top >= 150){
            menu.style.position = "fixed";
            menu.style.top = 0;
            menu.style.zIndex = 2;
        }else{
            menu.style.position = "relative";
            menu.style.top = 5;
        }
    }

    Menu();

}

// EFFECT SCROLL PAGE

const linkMenu = document.querySelectorAll(".menu ul li a");

console.log(linkMenu);

for (const link of linkMenu){
    link.addEventListener("click", clickMenu);
}

function clickMenu(e){
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}