const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const number = document.querySelector(".number");


let counter = 0;


decrease.addEventListener("click",()=>{
    --counter;
    if(counter<0){
        number.style.color="#f44336"
    }else if(counter==0){
        number.style.color="#121212";
    }
    number.textContent = counter;

})


reset.addEventListener("click",()=>{
    number.style.color="#121212";
    counter=0;
    number.textContent=counter;
})


increase.addEventListener("click",()=>{
    
    ++counter;
    if(counter>0){
        number.style.color="#4CAF50"
    }else if(counter==0){
        number.style.color="#121212";
    }
    number.textContent = counter;

})