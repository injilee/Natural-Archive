'use strict';

const textList1 = document.querySelector(".list1");
const textList2 = document.querySelector(".list2");
const textList3 = document.querySelector(".list3");
const textList4 = document.querySelector(".list4");

const mainBg = document.querySelector(".mainbg img");

const bg1 = document.querySelector(".bg-item1 img");
const bg2 = document.querySelector(".bg-item2 img");
const bg3 = document.querySelector(".bg-item3 img");
const bg4 = document.querySelector(".bg-item4 img");

const NONE = "0";
const BLOCK = "0.9";
const WHITE = "rgba(230, 230, 230, 0.86)";
const BLACK = "rgb(0, 42, 66)";

function onMouseOver1(event){
    bg1.style.opacity = BLOCK;
    mainBg.style.opacity = NONE;
    event.target.style.color = WHITE;
}

function onMouseLeave1(event){
    bg1.style.opacity = NONE;
    mainBg.style.opacity = BLOCK;
    event.target.style.color = BLACK;
}
textList1.addEventListener("mouseenter", onMouseOver1);
textList1.addEventListener("mouseleave", onMouseLeave1);


function onMouseOver2(event){
    bg2.style.opacity = BLOCK;
    mainBg.style.opacity = NONE;
    event.target.style.color = WHITE;
}

function onMouseLeave2(event){
    bg2.style.opacity = NONE;
    mainBg.style.opacity = BLOCK;
    event.target.style.color = BLACK;
}
textList2.addEventListener("mouseenter", onMouseOver2);
textList2.addEventListener("mouseleave", onMouseLeave2);

function onMouseOver3(event){
    bg3.style.opacity = BLOCK;
    mainBg.style.opacity = NONE;
    event.target.style.color = WHITE;
}

function onMouseLeave3(event){
    bg3.style.opacity = NONE;
    mainBg.style.opacity = BLOCK;
    event.target.style.color = BLACK;
}
textList3.addEventListener("mouseenter", onMouseOver3);
textList3.addEventListener("mouseleave", onMouseLeave3);

function onMouseOver4(event){
    bg4.style.opacity = BLOCK;
    mainBg.style.opacity = NONE;
    event.target.style.color = WHITE;
}

function onMouseLeave4(event){
    bg4.style.opacity = NONE;
    mainBg.style.opacity = BLOCK;
    event.target.style.color = BLACK;
}
textList4.addEventListener("mouseenter", onMouseOver4);
textList4.addEventListener("mouseleave", onMouseLeave4);



// hoverList.addEventListener("mouseover", function(){
//     for(let i=0;i<10;i++){
//             bg.classList.remove("bg");
//             document.querySelector(".poster-list > img").style.opacity = "1";
//         }
//     console.log("hi");
// });