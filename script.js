'use strict'
// selecting control elements

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const closeBtn=document.querySelector(".close-modal");
let openBtn=document.querySelectorAll(".show-modal");

console.log(openBtn);

for(let i=0 ;i<openBtn.length; i++){

    console.log(openBtn[i].textContent);
    openBtn[i].addEventListener('click',function(){

        // for class list we can pass more then one string .....

        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}

const closeModal=function(){

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

closeBtn.addEventListener('click', closeModal)

overlay.addEventListener('click',closeModal)
