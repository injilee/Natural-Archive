'use strict';

const mainBg = document.querySelector(".mainbg img");

const NONE = "0";
const BLOCK = "0.9";

const ul = document.querySelector(".content-items");
const li = document.querySelector(".content-items li");
const anchor = document.querySelectorAll(".content-items a");
const bg = document.querySelectorAll(".bg-content div");


ul.addEventListener('mouseenter', event =>{
    // 1. li selector
    if(event.target.tagName == 'LI'){
        mainBg.style.opacity = NONE;
        event.target.firstElementChild.classList.add('active');

        const idOne = event.target.firstElementChild.dataset.id;
        bg.forEach((e)=>{
            const idTwo = e.dataset.id;
            if(idOne == idTwo){
                    e.firstElementChild.classList.add('active');
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
                }
            });
    };
}, true);

// mobile
const windowWidth = window.matchMedia("screen and (max-width:782px)");

if(windowWidth.matches){
    const bgArr = Array.from(bg);
    let index = 0;
    setInterval(()=>{
        // bgArr[index++].classList.add('.active');

        if(index == bgArr.length){
            index = 0
        }
    }, 1000)
}
