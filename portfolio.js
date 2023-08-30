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



const scriptURL = 'https://script.google.com/macros/s/AKfycbyMfwUplqRfnHz-cVtDlrJuKV0zBNethpVMAY0tN4pi9vdSWrn4bzEjCP5SkBPegJeW3w/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      message.innerHTML = "Thank you ! Message sent successfully to Mr.Prashant!"
      setTimeout(() => {
        msg.innerHTML = ''

      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
// script.js
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
scrollToTopBtn.style.display = "block";
} else {
scrollToTopBtn.style.display = "none";
}
});

scrollToTopBtn.addEventListener("click", () => {
document.body.scrollTop = 0;  // For Safari
document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
});




