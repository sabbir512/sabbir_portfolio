let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu button");

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle("opened")
})