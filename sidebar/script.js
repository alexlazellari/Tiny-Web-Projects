//Variables
const burger = document.querySelector(".burger");
const exit = document.querySelector(".exit");
const nav = document.querySelector(".nav");


burger.addEventListener("click",()=>{
    nav.classList.toggle("show-nav");
})

exit.addEventListener("click",()=>{
    nav.classList.toggle("show-nav");
})