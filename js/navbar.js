'use strict';

const btn = document.querySelector(".btn");
let navBarDrop = document.querySelector("nav");

btn.addEventListener("click", (event)=>{
    event.currentTarget.classList.toggle("active");
    displayHandle();
    // console.log(navBarDrop);
});

function displayHandle(){
    if(navBarDrop.style.display == "flex"){
        navBarDrop.style.display = "none";
    } else {
        navBarDrop.style.display = "flex";
    }
}

window.addEventListener("resize", ()=>{
    if(window.innerWidth > 768){
        navBarDrop.style.display == "flex";
    }
});