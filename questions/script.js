//Variables
const btns = document.querySelectorAll(".btn");
const pghs = document.querySelectorAll(".answer");
const spans = document.querySelectorAll(".btn span")


btns.forEach((btn,index) =>{
    btn.addEventListener("click",()=>{

        pghs[index].classList.toggle("show-answer");
        spans[index*2+1].classList.toggle("disapear")

    })
})