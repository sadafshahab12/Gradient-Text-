let btn = document.querySelector("#mode-btn");
let body = document.querySelector("body");
let add = document.createElement("p");
let currMode = "light"; //dark
add.classList.add("msg");
body.append(add);
btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.style.background = "black";
    btn.innerText = "Light";
    btn.style.background = "black";
    btn.style.color = "white";
    btn.style.border = "2px solid white";
    add.innerText = "Dark mode is on";
    add.style.color = "white";
    add.style.border = "2px solid white";
  } else {
    currMode = "light";
    body.style.background = "white";
    btn.innerText = "Dark";
    btn.style.background = "white";
    btn.style.color = "black";
    btn.style.border = "2px solid black";
    add.innerText = "Light mode is on";
    add.style.color = "black";
    add.style.border = "2px solid black";
  }
});
