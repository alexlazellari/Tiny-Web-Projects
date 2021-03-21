const main = document.querySelector(".main");
const colorDOM = document.querySelector(".color__name");
const colorBtn = document.querySelector(".color-btn");


let array = ['a','b','c','d','e','f']

colorBtn.addEventListener("click",()=>{
    let randN;
    let randL;

    let color ='#';

    for(let i=0;i<3;i++){
        randN = Math.floor((Math.random()*10));
        randL = Math.floor(Math.random()*6);
        color+=randN+array[randL];
    }

    colorDOM.innerText = color;
    main.style.backgroundColor = color;

    console.log(colorBtn);


})