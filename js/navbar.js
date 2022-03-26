'use strict';

const btn = document.querySelector(".btn");
const btnIcon = document.querySelector(".btn i");
let navBarDrop = document.querySelector(".nav");

btn.addEventListener("click", (event)=>{
    event.currentTarget.classList.toggle("active");
    displayHandle();
    // console.log(navBarDrop);
});

function displayHandle(){
    if(navBarDrop.style.display == "flex"){
        navBarDrop.style.display = "none";
        navBarDrop.classList.remove('active');
        btnIcon.style.color = "#000";
    } else {
        navBarDrop.style.display = "flex";
        navBarDrop.classList.add('active');
        btnIcon.style.color = "#fff";
    }
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 768){
        navBarDrop.style.display == "flex";
    }
});