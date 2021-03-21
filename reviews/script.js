//Variables
const left = document.getElementById("left");
const right = document.getElementById("right");
const randomBtn = document.querySelector(".random");
const nameM = document.querySelector(".name");
const jobM = document.querySelector(".position");
const bio = document.querySelector(".bio");
const img = document.querySelector(".person-img");

// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  let counter =0;

  window.addEventListener("DOMContentLoaded",()=>{
    showPerson(0);
  });

left.addEventListener("click",()=>{
    counter--;
    if(counter < 0)counter=reviews.length-1;

    showPerson(counter);

})

right.addEventListener("click",()=>{
    counter++;
    if(counter > reviews.length-1) counter=0;
    showPerson(counter);
})

randomBtn.addEventListener("click",()=>{

    let randNum = Math.floor(Math.random()*reviews.length);

    console.log(randNum)
    counter=randNum;

    showPerson(counter);

})


function showPerson(counter){
    let member = reviews[counter];
    nameM.innerText = member.name;
    jobM.innerText = member.job;
    bio.innerText = member.text;
    img.style.backgroundImage = `url(${member.img})`
}