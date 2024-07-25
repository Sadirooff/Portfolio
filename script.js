const mainMenu = document.querySelector(".main-menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const tagla = document.querySelector("ul");


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
tagla.addEventListener("click",close)


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
    mainMenu.style.display = "in;ine-block";
}

