var humberger = document.querySelector("#hamburger");
var sideNav = document.querySelector(".side-nav");
var closeBtn = document.querySelector(".close-btn")

humberger.addEventListener('click', () =>{
    sideNav.style.width = '200px';
})

closeBtn.addEventListener('click', ()=>{
    sideNav.style.width = 0;
})

