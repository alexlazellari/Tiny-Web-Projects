//Variables
const modal = document.querySelector(".open");
const modalOverlay = document.querySelector(".modal-overlay");
const exit = document.querySelector(".exit");


// Display modal
modal.addEventListener("click",()=>{
    modalOverlay.classList.add("show-modal");
    console.log(modalOverlay);
})

exit.addEventListener("click",()=>{
    modalOverlay.classList.remove("show-modal");
})