'use strict';

const mainBg = document.querySelector(".mainbg img");

const bg1 = document.querySelector(".bg-item1 img");
const bg2 = document.querySelector(".bg-item2 img");
const bg3 = document.querySelector(".bg-item3 img");
const bg4 = document.querySelector(".bg-item4 img");

const NONE = "0";
const BLOCK = "0.9";
const WHITE = "rgba(230, 230, 230, 0.86)";
const BLACK = "rgb(0, 42, 66)";

const ul = document.querySelector(".content-items");
const li = document.querySelector(".content-items li");
const anchor = document.querySelectorAll(".content-items a");
const bg = document.querySelector(".bg-content");

ul.addEventListener('mouseenter', event =>{
    // 1. li selector
    if(event.target.tagName == 'LI'){
        event.target.classList.add('active');
    };

    // 2. 'a' add & remove classList
    anchor.forEach((e)=>{
        e.addEventListener('mouseenter', ()=>e.classList.add('active'))
    });
    
    
}, true);

ul.addEventListener('mouseleave', event =>{
    // 1. li selector
    if(event.target.tagName == 'LI'){
        event.target.classList.remove('active');
    };

    // 2. 'a' add & remove classList
    anchor.forEach((e)=>{
        e.addEventListener('mouseleave', ()=>e.classList.remove('active'))
    });
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
