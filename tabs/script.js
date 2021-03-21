//Variables
const tabs = [...document.querySelectorAll(".tabs li")];
const data = [...document.querySelectorAll(".place-info")];

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        
        tabs.forEach(tab=>{
            tab.classList.remove("active-tab")
        });
        
        tab.classList.add("active-tab");

        data.forEach(info=>{
            info.classList.remove("active-article")
        })

        data[index].classList.add("active-article")

    })
})