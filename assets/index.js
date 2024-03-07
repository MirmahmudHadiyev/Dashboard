let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((row) =>{
        row.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((row) => row.addEventListener("mouseover", activeLink));

//Menu Toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };

  let moon = document.getElementById("moon");
  let sun = document.getElementById("sun");


 moon.addEventListener('click', () => {
   document.querySelector(".main ").classList.add("moonlight");
   document.querySelector(".navigation ").classList.add("moonlight");
   moon.style.display = 'none'
   sun.style.display = 'block'
 })

 sun.addEventListener('click', () => {
    document.querySelector(".main ").classList.remove("moonlight");
    document.querySelector(".navigation ").classList.remove("moonlight");
    moon.style.display = 'block'
    sun.style.display = 'none'
  })
 
 