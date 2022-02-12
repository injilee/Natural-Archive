'use strict';

const mainBg = document.querySelector(".mainbg img");

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
