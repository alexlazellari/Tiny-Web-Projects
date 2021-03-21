const start = document.getElementById("start");
const cars = document.querySelectorAll(".car");



start.addEventListener("click",()=>{
    
    let race = setInterval(()=>{
        let offset = Number(cars[0].style.transform.replace(/[^\d.]/g, ''))+((Math.random(0,1)*5));
        cars[0].style.transform = "translateX("+offset+"px)";
        if(offset >= window.innerWidth){
            alert("Car Alex won")
            clearInterval(race);
        }
        
    },25)

    let race2 = setInterval(()=>{
        let offset = Number(cars[1].style.transform.replace(/[^\d.]/g, ''))+((Math.random(0,1)*5));
        cars[1].style.transform = "translateX("+offset+"px)";
        if(offset >= window.innerWidth){
            alert("Car Dimitris won")
            clearInterval(race2);
        }
    },30)

    let race3 = setInterval(()=>{
        let offset = Number(cars[2].style.transform.replace(/[^\d.]/g, ''))+((Math.random(0,1)*5));
        cars[2].style.transform = "translateX("+offset+"px)";
        if(offset >= window.innerWidth){
            alert("Car Sarantos won")
            clearInterval(race3);
        }
    },30)

    let race4 = setInterval(()=>{
        let offset = Number(cars[3].style.transform.replace(/[^\d.]/g, ''))+((Math.random(0,1)*5));
        cars[3].style.transform = "translateX("+offset+"px)";
        if(offset >= window.innerWidth){
            alert("Car Nick won")
            clearInterval(race4);
        }
    },30)

    let race5 = setInterval(()=>{
        let offset = Number(cars[4].style.transform.replace(/[^\d.]/g, ''))+((Math.random(0,1)*6));
        cars[4].style.transform = "translateX("+offset+"px)";
        if(offset >= window.innerWidth){
            alert("Car Boss won")
            clearInterval(race5);
        }
    },30)

})