'use strict'
// selecting control elements

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const closeBtn=document.querySelector(".close-modal");
const openBtn=document.querySelectorAll(".show-modal");

console.log(openBtn);

for(let i=0 ;i<openBtn.length; i++){

    console.log(openBtn[i].textContent);
}