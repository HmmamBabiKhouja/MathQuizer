let burger = document.querySelector("#burger");
let l1=document.querySelector(".line-one");
let l2=document.querySelector(".line-two");
let l3=document.querySelector(".line-three");
let burgerList=document.querySelector(".nav-list");

burger.addEventListener("click",()=>{

    l1.classList.toggle("line-one-acitve");
    l2.classList.toggle("line-two-acitve");
    l3.classList.toggle("line-three-acitve");
    burgerList.classList.toggle("nav-list-active");
});