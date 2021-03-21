//Variables
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const release = document.querySelector(".date");

let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date = localStorage.getItem("release");
let releaseDate = Date.now();

if(!date){
    let tenDaysDuration = 1000*60*60*24*10;
    releaseDate += tenDaysDuration;
    localStorage.setItem("release",releaseDate);
}else{
    releaseDate = date;
}

let temp = (new Date(parseInt(releaseDate))).toString().split(" ");

temp.pop();temp.pop();temp.pop();temp.pop();

if(temp[temp.length-1]>12){
    temp.push("pm");
}else{
    temp.push("am")
}



for(let i=0;i<weekDays.length;i++){
    if(weekDays[i].startsWith(temp[0])){
        temp[0] = weekDays[i];
        break;
    }
}

monthNames.forEach(month=>{
    if(month.startsWith(temp[1])) {
        temp[1] = month;
        return;
    }
})

temp = temp.join(' ');


release.innerText = temp;


let timer = setInterval(function(){

    let time = getTime(releaseDate);
    if(!time) {
        clearInterval(timer);
        time= ["00","00","00","00"];
    }


    days.innerText = time[0];
    hours.innerText = time[1];
    mins.innerText = time[2];
    secs.innerText = time[3]

},1000)



function getTime(releaseDate){

  

    const time = [];
    let currentTime = Date.now();
    let reminder = releaseDate - currentTime;

    if(reminder < 0) return null;

    let days = Math.floor(reminder/(1000*60*60*24));
    reminder %=(1000*60*60*24)
    if(days<10){
        days="0"+days;
    }
    time.push(days)
    let hours = Math.floor(reminder/(1000*60*60));
    reminder %=(1000*60*60);
    if(hours<10){
        hours="0"+hours;
    }
    time.push(hours)
    let mins = Math.floor(reminder/(1000*60))
    reminder %=(1000*60)
    if(mins<10){
        mins="0"+mins;
    }
    time.push(mins)
    let secs = Math.floor(reminder/1000);
    if(secs<10){
        secs="0"+secs;
    }
    time.push(secs)



    return time;

}