const box = document.getElementById("box");
const list = document.querySelector("ul");

function loadData() {
  Object.keys(localStorage).forEach((key) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.value = JSON.parse(localStorage.getItem(key)).value;
    const buttonDone = document.createElement("button");
    const buttonEx = document.createElement("button");
    const icon = document.createElement("i");
    li.appendChild(input);
    li.appendChild(buttonDone);
    buttonEx.className = "delete";
    buttonEx.innerText = "X";
    li.appendChild(buttonEx);
    buttonDone.className = "done";
    buttonDone.id = "done";
    icon.className = "fa fa-check";
    buttonDone.appendChild(icon);
    list.appendChild(li);
  });
}

loadData();

box.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.className === "delete") {
    event.target.parentNode.remove();
    // localStorage.removeItem()
    let value = event.target.previousSibling.previousSibling.value;
    Object.keys(localStorage).forEach((key) => {
      if (JSON.parse(localStorage.getItem(key)).value === value) {
        localStorage.removeItem(key);
        return;
      }
    });
  } else if (event.target.id === "done") {
    event.target.classList.toggle("active");
  } else if (event.target.className === "add") {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const buttonDone = document.createElement("button");
    const buttonEx = document.createElement("button");
    const icon = document.createElement("icon");
    li.appendChild(input);
    li.appendChild(buttonDone);
    buttonEx.className = "delete";
    buttonEx.innerText = "X";
    li.appendChild(buttonEx);
    buttonDone.className = "done";
    buttonDone.id = "done";
    icon.className = "fas fa-check";
    buttonDone.appendChild(icon);
    event.target.previousSibling.previousSibling.appendChild(li);

    input.addEventListener("change", (event) => {
      const item = {
        value: event.target.value,
      };
      localStorage.setItem(Math.random(0, 1) * 100, JSON.stringify(item));
    });
  }
});

// const inputs = document.getElementsByTagName("input");

// Array.from(inputs).forEach((element,index) => {
//     element.addEventListener("change",(event)=>{
//         const item ={
//                 "value" : event.target.value,
//         }
//         localStorage.setItem(index,JSON.stringify(item))
//     });
// });
