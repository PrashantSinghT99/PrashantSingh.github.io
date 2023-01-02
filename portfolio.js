var w = window.innerWidth;
var h = window.innerHeight;
console.log("width=" + w)
console.log("height=" + h)

const hamburger = document.querySelector(".navigations .navigation-list .hamburger");
const menu = document.querySelector('.navigations .navigation-list ul');
const sideNav = document.querySelectorAll('.navigations .navigation-list ul li a');


hamburger.addEventListener('click', function () {

    hamburger.classList.toggle('menuGo');

    menu.classList.toggle('menuGo');

})


sideNav.forEach((item)=>{
    item
    .addEventListener('click', function () {
    
        hamburger.classList.toggle('menuGo');
    
        menu.classList.toggle('menuGo');
}) 
})




