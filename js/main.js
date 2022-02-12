'use strict';

const mainBg = document.querySelector(".mainbg img");

const NONE = "0";
const BLOCK = "0.9";
const WHITE = "rgba(230, 230, 230, 0.86)";
const BLACK = "rgb(0, 42, 66)";

const ul = document.querySelector(".content-items");
const li = document.querySelector(".content-items li");
const anchor = document.querySelectorAll(".content-items a");
const bg = document.querySelectorAll(".bg-content div");


ul.addEventListener('mouseenter', event =>{
    // 1. li selector
    if(event.target.tagName == 'LI'){
        mainBg.style.opacity = NONE;
        // console.log(event.target.firstElementChild);
        event.target.firstElementChild.classList.add('active');

        const idOne = event.target.firstElementChild.dataset.id;
        bg.forEach((e)=>{
            const idTwo = e.dataset.id;
            if(idOne == idTwo){
                    e.firstElementChild.classList.add('active');
                    // console.log(e.firstElementChild)
                }
            });
    };
}, true);

ul.addEventListener('mouseleave', event =>{
    // 1. li selector
    if(event.target.tagName == 'LI'){
        mainBg.style.opacity = BLOCK;
        event.target.firstElementChild.classList.remove('active');

        const idOne = event.target.firstElementChild.dataset.id;
        bg.forEach((e)=>{
            const idTwo = e.dataset.id;
            if(idOne == idTwo){
                e.firstElementChild.classList.remove('active');
                // console.log(e.firstElementChild)
                }
            });
    };
}, true);


// function onMouseOver4(event){
//     bg4.style.opacity = BLOCK;
//     mainBg.style.opacity = NONE;
//     event.target.style.color = WHITE;
// }

// function onMouseLeave4(event){
//     bg4.style.opacity = NONE;
//     mainBg.style.opacity = BLOCK;
//     event.target.style.color = BLACK;
// }
// textList4.addEventListener("mouseenter", onMouseOver4);
// textList4.addEventListener("mouseleave", onMouseLeave4);
